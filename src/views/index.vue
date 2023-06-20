<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import VButton from '@/components/VButton/index.vue'
import VIcon from '@/components/VIcon/VIcon.vue'
import CardMovie from '@/components/Movies/CardMovie.vue'
import { useMoviesStore } from '@/stores/movies.ts'

const moviesStore = useMoviesStore()
const movies = ref<any>([])

onMounted(() => {
  movies.value = moviesStore.movies
})
</script>

<template>
  <h2 class="text-white"> Slider >></h2>
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

<style scoped>
.discover-movies {
  background-image: url('@/assets/bg-discover.png');
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>