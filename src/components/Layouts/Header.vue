<script lang="ts" setup>
import { ref } from "vue";
import VIcon from '../VIcon/VIcon.vue'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

const show = ref(true)
const search = ref('')
</script>

<template>
  <nav class="sticky top-0 flex gap-6 items-center justify-between px-20 z-10 flex-wrap bg-grey-darkest p-3 bg-primary-400 shadow-lg">
		<div class="grow flex items-center flex-no-shrink text-white gap-6">
      <img src="@/assets/logo.svg" class="mr-3"/>
      <div class="grow px-2 flex items-center bg-black bg-opacity-10 focus:outline-none focus:border-primary focus:ring-primary rounded-md sm:text-sm focus:ring-1">
        <v-icon name="ic:baseline-movie-creation" class="w-6 h-6 text-white text-opacity-10" />
        <input
          v-model="search"
          type="text"
          class="w-full px-2 py-2 lg:text-[16px] placeholder-grey text-grey bg-transparent border-transparent focus:outline-none focus:border-transparent focus:ring-0"
          placeholder="Find movie"
        />
        <v-icon name="material-symbols:search-rounded" class="w-6 h-6 text-white" />
      </div>
		</div>

		<div class="block lg:hidden">
			<button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-white hover:border-white">
				<svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
			</button>
		</div>

		<div class="w-full flex-none lg:flex lg:items-center lg:w-auto pt-6 lg:pt-0 gap-3" id="nav-content">
			<ul class="lg:flex flex-nowrap items-center uppercase gap-3 text-md text-white">
				<li class="px-4 py-2 rounded-md grow hover:bg-primary transition">
					<a class="font-semibold inline-block no-underline" href="#">
            <VIcon name="mingcute:grid-fill" class="w-5 h-5 text-white mr-1"></VIcon>
            Categories
          </a>
				</li>
				<li class="px-4 py-2 rounded-md grow hover:bg-primary transition">
					<a class="font-semibold inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline" href="#">Movies</a>
				</li>
				<li class="px-4 py-2 rounded-md grow hover:bg-primary transition">
					<a class="font-semibold inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline" href="#">TV Shows</a>
				</li>
				<li class="px-4 py-2 rounded-md grow hover:bg-primary transition">
					<a class="font-semibold inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline" href="#">Login</a>
				</li>
			</ul>
		</div>
	</nav>
</template>