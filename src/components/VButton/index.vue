<script setup lang="ts">
import type { RouteLocation } from 'vue-router';
import { computed} from 'vue';

type Props = {
  variant?: string;
  size?: string;
  to?: string | RouteLocation;
  fullWidth?: boolean;
  override?: boolean;
  rounded?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  variant: 'secondary',
  size: 'md',
});

const classes = computed(() => {
  return {
    btn: true,
    [`btn-${props.variant}`]: props.variant,
    [`btn-${props.size}`]: props.size,
    'btn-full-width': props.fullWidth,
    'btn--rounded': props.rounded,
  };
});

const attributes = computed(() => {
  return {
    to: props.to,
  };
});
</script>

<template>
  <button v-bind="attributes" :class="classes">
    <slot />
  </button>
</template>
