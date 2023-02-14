<!--
 * new index
 * @author: xiaojie
 * @since: 2023-02-14
 * index.vue
-->
<template>
  <svg
    class="svgClass"
    :style="{
      width: size! / rem! + `rem`,
      height: size! / rem! + `rem`
    }"
    aria-hidden="true"
  >
    <use :xlink:href="'#icon-' + name" class="use"></use>
  </svg>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  name: String,
  size: Number,
  rem: Number
})
</script>

<style lang="scss" scoped></style>
