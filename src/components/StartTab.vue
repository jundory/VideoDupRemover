<template>
  <div class="flex items-center h-[60px]">
    <div class="header__menu">
      <Bars3Icon class="w-7 text-black" @click="showSidebar()" />
    </div>
    <!-- 유튜브 아이콘 -->
    <div class="header__logo" @click="router.push('/')">
      <img src="@/assets/youtube_logo.svg" alt="YouTube Logo" class="w-24 h-24" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineEmits } from 'vue'
import { useRouter } from 'vue-router'
import { Bars3Icon } from '@heroicons/vue/24/outline'

interface Emits {
  (event: 'show-sidebar'): void
}
const emits = defineEmits<Emits>()

const router = useRouter()

const showSidebar = (): void => {
  emits('show-sidebar')
}
</script>
