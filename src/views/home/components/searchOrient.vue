<!--
 * new search
 * @author: xiaojie
 * @since: 2023-02-14
 * search.vue
-->
<template>
  <div class="search-orient">
    <div class="icon">
      <icon-svg name="loas" :size="64" :rem="200"></icon-svg>
      <span class="text"
        >送至<i>:</i><i>{{ orient }}</i></span
      >
    </div>
    <div class="search">
      <icon-svg name="suosui" :size="64" :rem="200"></icon-svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  orient: String
})
</script>

<style lang="scss" scoped>
.search-orient {
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  height: 40px;
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    .text {
      font-size: 24px;
      color: #ababab;
      i {
        margin-left: 10px;
      }
    }
  }
  .search {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
