<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import VButton from '@/components/VButton/index.vue'
import VIcon from '@/components/VIcon/VIcon.vue'
import CardMovie from '@/components/Movies/CardMovie.vue'
import { useMoviesStore } from '@/stores/movies.ts'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper';

const moviesStore = useMoviesStore()
const movies = ref<any>([])
const swiperMovie = ref<any>(null);
const modules = [Pagination]

onMounted(() => {
  movies.value = moviesStore.movies
})

const onSwiper = (swiper: any) => {
  console.log(swiper);
  swiperMovie.value = swiper;
};

const onSlideChange = () => {
  console.log('slide change');
};
</script>

<template>
  <swiper
    :autoHeight="true"
    :rewind="true"
    :slidesPerView="3"
    :centeredSlides="true"
    :spaceBetween="30"
    :loop="true"
    :autoplay="{
      delay: 300,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    :breakpoints="{
      '@0.00': {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      '@0.75': {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      '@1.00': {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      '@1.50': {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }"
    class="swiper-movie"
  >
    <swiper-slide v-for="item in movies" :key="item.id">
      <div class="py-20 flex flex-col justify-center">
        <div class="py-3 sm:max-w-xl sm:mx-auto">
          <div class="flex flex-wrap md:flex-nowrap">
            <div class="h-48 lg:-mt-6 m-auto overflow-visible w-1/2">
                <img class="shadow-lg" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg" alt="">
            </div>
            <div class="flex flex-col bg-black p-4 w-full h-100">
              <div>
                <v-icon name="material-symbols:star-rounded" class="mr-2 h-6 w-6 text-yellow-500"></v-icon>
                <span class="text-white font-bold text-lg">{{ item.rating }}</span>
              </div>
              <p class="text-white font-bold text-2xl">{{ item.title }}</p>
              <p class="text-md">{{ item?.genre[0] }}</p>
              <p class="text-white">
                {{ item.overview }}
              </p>
              <!-- <div>
                <div class="text-sm text-gray-400">Series</div>
                <div class="text-lg text-gray-800">2019</div>
              </div>
                <p class=" text-gray-400 max-h-40 overflow-y-hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div class="flex text-2xl font-bold text-a">$83.90</div> -->
            </div>

          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
  <div class="discover-movies">
    <div class="px-5 lg:px-20 py-11">
      <div class="bg-secondary w-[112px] h-[6px] mb-2">
      </div>
      <div class="flex flex-wrap justify-between relative mb-8">
        <p class="font-semibold text-grey text-2xl lg:mb-0 mb-4">Discover Movies</p>
        <div class="flex gap-2">
          <v-button variant="secondary" size="xs px-3" rounded>
            Popularity
          </v-button>
          <v-button variant="primary" size="xs px-3" rounded>
            Release Date
          </v-button>
        </div>
      </div>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div v-for="item in movies" :key="item.id">
          <CardMovie
            :item="item"
          >
          </CardMovie>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.swiper-movie .swiper-pagination-bullet {
  @apply bg-white mx-5 h-3 w-3
}
.swiper-movie .swiper-pagination-bullet-active {
  @apply bg-secondary w-14 rounded-md
}
.discover-movies {
  background-image: url('@/assets/bg-discover.png');
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>