<template>
  <div class="page">
    <div class="header" :class="{ active: isSideShow }">
      <!-- 상단 헤더 -->
      <HeaderBar @show-sidebar="showSidebar()" />
    </div>
    <div class="contents">
      <!-- 사이드 바 -->
      <div class="side-bar" :class="{ active: isSideShow }">
        <SideBar @show-sidebar="showSidebar()" :isOpen="isSideShow" :key="isSideShow" />
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

const isSideShow = ref<boolean>(false)

const showSidebar = (): void => {
  isSideShow.value = !isSideShow.value
}
</script>
<style lang="scss">
// .test-component {
//   // background: $primary-color; // app.scss에서 정의한 변수 사용
// }
</style>
