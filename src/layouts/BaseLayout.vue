<template>
  <div class="page">
    <div class="header">
      <Bars3Icon class="w-7" @click="showSidebar()" />
      <!-- 상단 헤더 -->
      <HeaderBar />
    </div>
    <div class="contents">
      <!-- 사이드 바 -->
      <div class="side-bar" :class="{ active: isSideShow }">
        <SideBar />
      </div>
      <!-- 영상 리스트 -->
      <div class="item-box" :class="{ active: isSideShow }">
        <RouterView />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import HeaderBar from '../components/HeaderBar.vue'
import SideBar from '../components/SideBar.vue'
import { Bars3Icon } from '@heroicons/vue/24/outline'

const isSideShow = ref(false)

const showSidebar = () => {
  isSideShow.value = !isSideShow.value
}
</script>
<style lang="scss">
// .test-component {
//   // background: $primary-color; // app.scss에서 정의한 변수 사용
// }
</style>
