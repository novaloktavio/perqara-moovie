<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import CardMovie from '@/components/Movies/CardMovie.vue'
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
  console.log('lesini')
  const res = moviesStore.getMovie(Number(id.value))
  movie.value = res
}
</script>

<template>
  {{ movie }}
</template>