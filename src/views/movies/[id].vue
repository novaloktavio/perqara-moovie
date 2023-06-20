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

const id = computed(() => {
  return route.params.id
});

onMounted(() => {
  getMovie()
})

const getMovie = () => {
  const res = moviesStore.getMovie(Number(id.value))
  movie.value = res
}
</script>

<template>
  <!-- <div class="header-movie">
    <div class="px-5 lg:px-20 py-11 pt-52">
      {{ movie }}
      <div class="flex">
        <img src="@/assets/movie.png" />
      </div>
    </div>
  </div> -->
  <div class="header-movie py-6 flex flex-col sm:py-32 max-h-80	">
    <div class="py-3 px-5 lg:px-20">
      <div class="py-4 flex flex-wrap gap-11">
        <div class="h-1 overflow-visible z-[9]">
            <img src="@/assets/movie.png" alt="">
        </div>
        <div class="flex flex-col grow space-y-4">
          <div class="text-white">
            <p class="text-lg">{{ movie?.year }}</p>
            <p class="text-3xl font-bold text-white">{{ movie?.title }}</p>
            <p class="text-md">{{ movie?.genre.join(', ') }}</p>
          </div>
          <div class="flex w-full bg-black bg-opacity-50">
            <div class="rating text-white">
              rating
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
</template>

<style scoped>
.header-movie {
  background-image: url('@/assets/bg-movie.png');
  background-repeat: no-repeat;
  background-size: 100% ;
}
</style>