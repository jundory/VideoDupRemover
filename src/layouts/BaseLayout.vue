<template>
  <div class="page">
    <div class="header">
      <!-- 상단 헤더 -->
      <HeaderBar />
      <!-- 네브바 -->
    </div>
    <div class="contents-box"></div>
    <RouterView />
  </div>
</template>
<script lang="ts" setup>
import HeaderBar from '../components/HeaderBar.vue'
</script>
