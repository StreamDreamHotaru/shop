<!--
 * new index
 * @author: xiaojie
 * @since: 2023-02-14
 * index.vue
-->
<template>
  <div class="home">
    <search-orient orient="北京"></search-orient>
  </div>
</template>

<script setup lang="ts">
import { reactive, getCurrentInstance } from 'vue'
import searchOrient from './components/searchOrient.vue'
let homeData = reactive({})
const cns = getCurrentInstance()
const config = cns?.appContext.config.globalProperties
const fetchHome = async () => {
  const { data } = await config?.$api.home.data()
  homeData = data
  console.log(homeData)
}
fetchHome()
</script>

<style lang="scss" scoped></style>
