<script lang="ts" setup>
import { computed } from "vue";

type Props = {
  variant?: 'default' | 'warning' | string;
};

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
});

const classes = computed(() => {
  let classVariant = ''
  switch (props.variant) {
    case 'default':
      classVariant = 'border bg-primary bg-opacity-5'
      break;
    case 'warning':
      classVariant = 'text-white bg-yellow-500'
      break;
    case 'secondary':
      classVariant = 'text-white bg-secondary'
      break;
    default:
      break;
  }
  return [
    classVariant,
    'py-1 px-2 pr-3 text-sm rounded-md font-bold align-center',
  ];
});
</script>

<template>
  <span :class="classes">
    <slot />
  </span>
</template>