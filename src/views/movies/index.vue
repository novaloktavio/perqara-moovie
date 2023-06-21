<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import CardMovie from '@/components/Movies/CardMovie.vue'
import VIcon from '@/components/VIcon/VIcon.vue'
import VButton from '@/components/VButton/index.vue'
import { useMoviesStore } from '@/stores/movies.ts'
import { useRoute } from 'vue-router'
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'

const popularities = [
  { name: 'Popularity Ascending' },
  { name: 'Popularity Descending' },
  { name: 'Release Date Ascending' },
  { name: 'Release Date Descending' },
  { name: 'Rating Ascending' },
  { name: 'Rating Descending' },
]
const genres = [
  {
    name: 'Action',
    value: 'action',
  },
  {
    name: 'Adventure',
    value: 'adventure',
  },
  {
    name: 'Animation',
    value: 'animation',
  },
  {
    name: 'Comedy',
    value: 'comedy',
  },
  {
    name: 'Crime',
    value: 'crime',
  },
  {
    name: 'Documentary',
    value: 'documentary',
  },
  {
    name: 'Drama',
    value: 'drama',
  },
  {
    name: 'Family',
    value: 'family',
  },
  {
    name: 'Fantasy',
    value: 'fantasy',
  },
  {
    name: 'History',
    value: 'history',
  },
  {
    name: 'Horror',
    value: 'horror',
  },
]

const route = useRoute()
const moviesStore = useMoviesStore()
const movies = ref()
const category = ref<any>({})

onMounted(() => {
  getMovie()
})

const getMovie = () => {
  const res = moviesStore.movies
  movies.value = res
}
</script>

<template>
  <div class="movies">
    <div class="px-5 lg:px-20 py-11">
      <div class="bg-secondary w-[112px] h-[6px] mb-2">
      </div>
      <div class="flex flex-wrap justify-between relative mb-10">
        <p class="font-semibold text-grey text-4xl">Movies</p>
      </div>
      <div class="flex flex-wrap md:flex-nowrap gap-5">
        <div class="filter">
          <div class="bg-gradient-to-b from-[#0E1723] to-primary rounded-md w-72 py-5">
            <div class="text-left mb-3 px-5">
              <p class="text-white font-bold text-base">Sort Result By</p>
            </div>
            <Listbox v-model="category" class="p-5 border-y border-white border-opacity-5" v-slot="{ open }">
              <div class="relative mt-1">
                <ListboxButton
                  class="relative w-full cursor-pointer rounded-lg bg-grey-400 bg-opacity-10 py-2 pl-3 pr-10 text-left sm:text-sm"
                >
                  <span class="block truncate text-white">
                    {{ category.name || 'Popularity' }}
                  </span>
                  <span
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-white"
                  >
                    <VIcon v-if="open" name="material-symbols:arrow-drop-up" class="w-8 h-8 text-grey-300"></VIcon>
                    <VIcon v-else name="material-symbols:arrow-drop-down" class="w-8 h-8 text-grey-300"></VIcon>
                  </span>
                </ListboxButton>

                <transition
                  leave-active-class="transition duration-100 ease-in"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <ListboxOptions
                    class="absolute mt-1 max-h-60 w-fit bg-primary-600 overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  >
                    <ListboxOption
                      v-slot="{ active, selected }"
                      v-for="popularity in popularities"
                      :key="popularity.name"
                      :value="popularity"
                      as="template"
                    >
                      <li
                        :class="[
                          active ? 'bg-primary-400 font-bold' : '',
                          'relative cursor-default select-none p-3',
                          selected ? 'bg-primary-400' : ''
                        ]"
                        class="cursor-pointer text-white px-8"
                      >
                        <span
                          :class="[
                            selected ? 'font-extrabold' : 'font-normal',
                            'block truncate',
                          ]"
                          >{{ popularity.name }}</span
                        >
                      </li>
                    </ListboxOption>
                  </ListboxOptions>
                </transition>
              </div>
            </Listbox>
            <div class="p-5 border-y border-white border-opacity-5">
              <p class="text-white font-bold text-base">Genres</p>
            </div>
            <div
              v-for="genre in genres"
              :key="genre.value"
              class="flex items-center justify-between px-5"
            >
              <label
                class="mt-px cursor-pointer text-white"
                :for="genre.value"
              >
                {{ genre.name }}
              </label>
              <label
                class="relative flex cursor-pointer items-center rounded-full p-3"
                :for="genre.value"
                data-ripple-dark="true"
              >
                <input
                  :id="genre.value"
                  name="genres"
                  :value="genre.value"
                  type="checkbox"
                  class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border !border-white !border-opacity-20 !bg-white !bg-opacity-20 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-primary before:opacity-20 before:transition-opacity checked:border-secondary checked:!bg-secondary checked:before:bg-secondary hover:before:opacity-10"
                />
                <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class="w-full">
          <div class="grid w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div v-for="item in movies" :key="item.id">
              <CardMovie
                :item="item"
              >
              </CardMovie>
            </div>
          </div>
          <div class="my-8 text-center">
            <v-button variant="secondary" size="md" rounded>Load More</v-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.movies {
  background-image: url('@/assets/bg-discover.png');
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>
