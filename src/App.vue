<script setup lang="ts">
import Player from './views/PlayerViews.vue'
import { register } from 'swiper/element/bundle'
register()
</script>

<template>
  <swiper-container navigation="true">
    <swiper-slide><Player /></swiper-slide>
    <swiper-slide><Player /></swiper-slide>
    <swiper-slide><Player /></swiper-slide>
    <swiper-slide><Player /></swiper-slide>
  </swiper-container>
</template>

<style>
swiper-container::part(button-prev) {
  position: fixed;
}
swiper-container::part(button-next) {
  position: fixed;
}
</style>
