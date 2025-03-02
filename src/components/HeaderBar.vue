<template>
  <div class="header__menu">
    <Bars3Icon class="w-7 text-black" @click="showSidebar()" />
  </div>
  <!-- 유튜브 아이콘 -->
  <div class="header__logo">
    <img src="@/assets/youtube_logo.svg" alt="YouTube Logo" class="w-24 h-24" />
  </div>
  <!-- 인풋박스 -->
  <div class="header__input">
    <inputBox />
  </div>
</template>
<script lang="ts" setup>
import { defineEmits } from 'vue'
import { Bars3Icon } from '@heroicons/vue/24/outline'
import inputBox from '@/components/inputBox.vue'

interface Emits {
  (event: 'show-sidebar'): void
}

const emits = defineEmits<Emits>()

const showSidebar = (): void => {
  emits('show-sidebar')
}
</script>
