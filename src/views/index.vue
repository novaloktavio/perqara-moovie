<script lang="ts" setup>
import { ref } from 'vue'
import VButton from '@/components/VButton/index.vue'
import VIcon from '@/components/VIcon/VIcon.vue'

const movies = ref([
  {
    id: 1,
    title: 'Wonder Woman 1984',
    year: '2020',
    rating: '7.0',
  },
  {
    id: 2,
    title: 'Below Zero',
    year: '2021',
    rating: '6.4',
  },
  {
    id: 3,
    title: 'The Little Things',
    year: '2021',
    rating: '6.3',
  },
  {
    id: 4,
    title: 'Outside the Wire',
    year: '2021',
    rating: '6.5',
  },
  {
    id: 5,
    title: 'Black Water: Abyss',
    year: '2020',
    rating: '5.1',
  },
  {
    id: 6,
    title: 'Breach',
    year: '2021',
    rating: '4.6',
  },
])
</script>

<template>
  <h2 class="text-white"> Slider >></h2>
  <div class="discover-movies">
    <div class="px-20 py-11">
      <div class="bg-secondary w-[112px] h-[6px] mb-2">
      </div>
      <div class="flex flex-wrap justify-between relative mb-8">
        <p class="font-semibold text-grey text-2xl">Discover Movies</p>
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
          <div
            class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat"
            data-te-ripple-init
            data-te-ripple-color="light">
            <img
              src="@/assets/movie.png"
              class="w-full"
            />
            <div class="absolute right-0 top-0 text-right bg-primary bg-opacity-80 px-2 py-1">
              <p class="text-white text-lg font-extrabold">
                {{ item.rating }}
              </p>
            </div>
            <a href="#!">
              <div
                class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-opacity-80 bg-fixed opacity-0 transition duration-500 ease-in-out hover:opacity-100"
              >
                <div class="h-full items-center text-center text-white relative top-[35%]">
                  <p class="mb-3 text-2xl">
                    <v-icon name="material-symbols:star-rounded" class="h-8 w-8 text-yellow-500"></v-icon>
                    {{ item.rating }}
                  </p>
                  <p class="mb-3 text-lg">Action</p>
                  <div>
                    <v-button variant="secondary" rounded class="uppercase !px-8">
                      View
                    </v-button>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="title font-semibold text-base text-white">
            {{ item.title }}
          </div>
          <div class="year text-sm text-gray-500">
            {{ item.year }}
          </div>
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