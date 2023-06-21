<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import CardMovie from '@/components/Movies/CardMovie.vue'
import CardReview from '@/components/Movies/CardReview.vue'
import VIcon from '@/components/VIcon/VIcon.vue'
import { useMoviesStore } from '@/stores/movies.ts'
import { useRoute } from 'vue-router'

const route = useRoute()
const moviesStore = useMoviesStore()
const movie = ref()
const movies = ref<any>([])

const id = computed(() => {
  return route.params.id
});

onMounted(() => {
  getMovie()
  getAllMovie()
})

const getMovie = () => {
  const res = moviesStore.getMovie(Number(id.value))
  movie.value = res
}

const getAllMovie = () => {
  const res = moviesStore.movies
  movies.value = res.slice(-5)
}
</script>

<template>
  <div class="header-movie flex flex-col sm:pt-32 max-h-80">
    <div class="px-5 lg:px-20">
      <div class="flex flex-nowrap gap-11">
        <div class="h-1 overflow-visible z-[9]">
            <img :src="`/movies/${movie?.id}.png?url`" alt="">
        </div>
        <div class="flex flex-col grow space-y-4">
          <div class="text-white">
            <p class="text-lg">{{ movie?.year }}</p>
            <p class="text-3xl font-bold text-white">{{ movie?.title }}</p>
            <p class="text-md">{{ movie?.genre.join(', ') }}</p>
          </div>
          <div class="flex w-full bg-black bg-opacity-50 gap-4 p-4 items-center">
            <div class="rating text-white">
              <p class="text-white text-4xl font-extrabold">
                <v-icon name="material-symbols:star-rounded" class="h-11 w-11 text-yellow-500"></v-icon>
                {{ movie?.rating || '-' }}
              </p>
            </div>
            <div>
              <p class="text-white text-sm text-opacity-50 uppercase">
                User Score
              </p>
              <p class="text-white text-sm uppercase">
                {{ movie?.votes }} Votes
              </p>
            </div>
            <div class="border-l border-opacity-20 border-white pl-2">
              <p class="text-white text-sm text-opacity-50 uppercase">
                Status
              </p>
              <p class="text-white text-sm uppercase">
                {{ movie?.status }}
              </p>
            </div>
            <div class="border-l border-opacity-20 border-white pl-2">
              <p class="text-white text-sm text-opacity-50 uppercase">
                Language
              </p>
              <p class="text-white text-sm uppercase">
                {{ movie?.language }}
              </p>
            </div>
            <div class="border-l border-opacity-20 border-white pl-2">
              <p class="text-white text-sm text-opacity-50 uppercase">
                Budget
              </p>
              <p class="text-white text-sm uppercase">
                {{ movie?.budget }}
              </p>
            </div>
            <div class="border-l border-opacity-20 border-white pl-2">
              <p class="text-white text-sm text-opacity-50 uppercase">
                Production
              </p>
              <p class="text-white text-sm uppercase">
                {{ movie?.production }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="description bg-white px-5 lg:pl-80 lg:px-20 py-3 flex flex-nowrap pb-20">
    <div class="ml-6 w-1/2">
      <p class="text-secondary font-bold text-lg uppercase">Overview</p>
      <p>{{ movie?.overview }}</p>
    </div>
  </div>
  <div class="review bg-white px-5 lg:px-20 py-11">
    <p class="text-secondary font-bold text-lg uppercase">Reviews</p>
    <div class="grid grid-cols-2 gap-5 mt-5">
      <template
        v-for="review in movie?.reviews"
        :key="review.id"
        >
          <card-review
            :name="review.name"
            :rate="review.rate"
            :date="review.date"
            :review="review.review"
          >
          </card-review>
      </template>
    </div>
  </div>
  <div class="recommendation px-5 lg:px-20 py-8">
    <p class="text-white font-bold text-lg uppercase">Recommendation Movies</p>
    <div class="py-3 grid grid-cols-5 gap-5 mt-5">
      <div v-for="item in movies" :key="item.id">
        <CardMovie
          :item="item"
        >
        </CardMovie>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-movie {
  background-image: url('@/assets/bg-movie.png');
  background-repeat: no-repeat;
  background-size: 100% ;
}
</style>