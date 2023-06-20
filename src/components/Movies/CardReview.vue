
<script setup lang="ts">
import { ref, toRefs } from "vue"
import VIcon from '../VIcon/VIcon.vue'

const props = defineProps({
  name: {
    type: String,
    default: 'Username',
  },
  rate: {
    type: String,
    default: '5.0',
  },
  date: {
    type: String,
    default: '20 June 2020',
  },
  review: {
    type: String,
    default: 'Lorem ipsum',
  },
})
const { name, rate, date, review } = toRefs(props)
const readMoreActivated = ref(false)

const truncate = (text: string, isTruncate: boolean) =>  {
  if (isTruncate) {
    if (text.length > 500) {
       console.log('masuk if')
       return text.substring(0, 500) + '...';
    }
  }
  console.log({text, isTruncate})
  return text;
};

const activateReadMore = () => {
  readMoreActivated.value = true
}

</script>

<template>
  <div
    class="bg-grey-700 shadow-xl rounded-xl p-4 h-fit"
  >
    <div class="flex justify-between">
      <div class="flex gap-4 items-center">
        <div class="w-14 h-14 bg-primary bg-opacity-20 rounded-full"></div>
        <div>
          <p class="font-extrabold text-black">{{ name }}</p>
          <p class="text-sm text-grey-800">{{ date }}</p>
        </div>
      </div>
      <div class="bg-grey-400 bg-opacity-25 flex p-3 rounded-md gap-2">
        <v-icon name="material-symbols:star-rounded" class="h-6 w-6 text-yellow-500"></v-icon>
        <p class="font-bold text-3xl">
          {{ rate }}
        </p>
      </div>
    </div>
    <div class="mt-4">
      <span v-if="!readMoreActivated">{{review.slice(0, 500)}}   </span>
      <span v-if="readMoreActivated" v-html="review"></span>
      <span
        class="text-secondary cursor-pointer italic underline ml-2"
        @click="readMoreActivated = !readMoreActivated"
      >
        {{ !readMoreActivated ? 'read the rest' : 'show less'}}
      </span>
    </div>
  </div>
</template>
