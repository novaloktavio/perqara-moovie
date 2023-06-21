<script lang="ts" setup>
import { computed, ref } from "vue";
import VIcon from '../VIcon/VIcon.vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from '@headlessui/vue'
import { useMoviesStore } from '@/stores/movies.ts'
import router from '@/router'

const categories = [
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
const moviesStore = useMoviesStore()
const show = ref(true)
const search = ref('')
const category = ref<any>({})
const movies = ref<any>([])
const selectedMovie = ref()
const query = ref('')

const filteredMovies = computed(() =>
  query.value === ''
    ? moviesStore.movies
    : moviesStore.movies.filter((movie: any) => {
        return movie.title.toLowerCase().includes(query.value.toLowerCase())
      })
)

const goToMovie = (id: string) => {
  router.push(`/movies/${id}`)
}
</script>

<template>
  <nav class="sticky top-0 flex gap-6 items-center justify-between px-20 z-10 flex-wrap bg-grey-darkest p-3 bg-primary-400 shadow-lg">
		<div class="grow flex items-center flex-no-shrink text-white gap-6">
      <a href="/">
        <img src="@/assets/logo.svg" class="mr-3"/>
      </a>
      <div class="grow px-2 flex items-center bg-black bg-opacity-10 focus:outline-none focus:border-primary focus:ring-primary rounded-md sm:text-sm focus:ring-1">
        <Combobox v-model="selectedMovie">
          <v-icon name="ic:baseline-movie-creation" class="w-6 h-6 text-white text-opacity-10" />
          <ComboboxInput
            class="w-full px-2 py-2 lg:text-[16px] placeholder-grey border text-grey bg-transparent border-transparent focus:outline-none focus:border-transparent focus:ring-0"
            @change="query = $event.target.value"
            :displayValue="(movie) => movie.title"
            placeholder="Find movie"
          />
          <v-icon name="material-symbols:search-rounded" class="w-6 h-6 text-white" />
          <ComboboxOptions
            class="absolute top-14 -ml-2 p-4 bg-primary rounded-md text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <ComboboxOption
              v-for="movie in filteredMovies"
              :key="movie.id"
              :value="movie"
              class="py-2 cursor-pointer"
              @click="goToMovie(movie.id)"
            >
              {{ movie.title }}
            </ComboboxOption>
          </ComboboxOptions>
        </Combobox>
      </div>
      <!-- <div class="grow px-2 flex items-center bg-black bg-opacity-10 focus:outline-none focus:border-primary focus:ring-primary rounded-md sm:text-sm focus:ring-1">
        <v-icon name="ic:baseline-movie-creation" class="w-6 h-6 text-white text-opacity-10" />
        <input
          v-model="search"
          type="text"
          class="w-full px-2 py-2 lg:text-[16px] placeholder-grey text-grey bg-transparent border-transparent focus:outline-none focus:border-transparent focus:ring-0"
          placeholder="Find movie"
        />
        <v-icon name="material-symbols:search-rounded" class="w-6 h-6 text-white" />
      </div> -->
		</div>

		<div class="block lg:hidden">
			<button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-white hover:border-white">
				<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
			</button>
		</div>

		<div class="w-full flex-none lg:flex lg:items-center lg:w-auto pt-6 lg:pt-0 gap-3" id="nav-content">
			<ul class="lg:flex flex-nowrap items-center uppercase gap-3 text-md text-white">
        <Listbox v-model="category" class="px-4 py-2 rounded-md grow hover:bg-primary transition cursor-pointer">
          <div class="relative mt-1">
            <ListboxButton
              class="relative w-full cursor-pointer rounded-lg bg-opacity-10 text-left sm:text-sm"
            >
              <span class="block truncate text-white uppercase font-semibold">
                <VIcon name="mingcute:grid-fill" class="w-5 h-5 text-white mr-1"></VIcon>
                Categories
              </span>
            </ListboxButton>

            <transition
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions
                class="absolute mt-3 w-fit -ml-4 bg-white overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              >
                <ListboxOption
                  v-slot="{ active, selected }"
                  v-for="category in categories"
                  :key="category.name"
                  :value="category"
                  as="template"
                >
                  <li
                    :class="[
                      active ? 'bg-grey font-bold' : '',
                      'relative cursor-default select-none p-3',
                      selected ? 'bg-grey' : ''
                    ]"
                    class="cursor-pointer text-primary font-bold px-8"
                  >
                    <span
                      :class="[
                        selected ? 'font-extrabold' : 'font-normal',
                        'block truncate',
                      ]"
                      >{{ category.name }}</span
                    >
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
				<!-- <li class="px-4 py-2 rounded-md grow hover:bg-primary transition cursor-pointer" to="#">
					<a class="font-semibold inline-block no-underline" href="#">
            <VIcon name="mingcute:grid-fill" class="w-5 h-5 text-white mr-1"></VIcon>
            Categories
          </a>
				</li> -->
				<li class="px-4 py-2 rounded-md grow hover:bg-primary transition cursor-pointer" to="/movies">
					<a class="font-semibold no-underline" href="/movies">Movies</a>
				</li>
				<li class="px-4 py-2 rounded-md grow hover:bg-primary transition cursor-pointer" to="#">
					<a class="font-semibold no-underline" href="#">TV Shows</a>
				</li>
				<li class="px-4 py-2 rounded-md grow hover:bg-primary transition cursor-pointer" to="#">
					<a class="font-semibold no-underline" href="#">Login</a>
				</li>
			</ul>
		</div>
	</nav>
</template>