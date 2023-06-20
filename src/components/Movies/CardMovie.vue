
<script setup lang="ts">
import { toRefs } from "vue"
import VButton from '../VButton/index.vue'
import VIcon from '../VIcon/VIcon.vue'
import router from '@/router'

const props = defineProps({
  item: {
    type: Object,
    default: {
      title: 'Movie Title',
      rating: '9.9',
      year: '1999',
      id: '1',
      genre: 'Movie Genre',
    }
  },
})
const { item } = toRefs(props)

const goToDetail = () => {
  router.push(`/movies/${item.value.id}`)
}
</script>

<template>
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
    <div
      class="cursor-pointer absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-opacity-80 bg-fixed opacity-0 transition duration-500 ease-in-out hover:opacity-100"
      @click="goToDetail()"
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
  </div>
  <div class="title font-semibold text-base text-white">
    {{ item.title }}
  </div>
  <div class="year text-sm text-gray-500">
    {{ item.year }}
  </div>
</template>
