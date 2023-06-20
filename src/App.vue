<script setup lang="ts">
import Header from '@/components/Layouts/Header.vue'
import Footer from '@/components/Layouts/Footer.vue'
</script>

<template>
  <Header></Header>
  <router-view :key="$route.fullPath" />
  <Footer></Footer>
</template>

<style scoped>
</style>
