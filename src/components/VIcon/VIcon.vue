<script lang="ts" setup>
import { Icon } from '@iconify/vue';

defineProps<{
  name: string
}>()
</script>

<template>
	<Icon :icon="name" class="inline-block align-sub"></Icon>
</template>