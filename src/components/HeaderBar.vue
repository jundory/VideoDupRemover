<template>
  <!-- 인풋박스 -->
  <StartTab @show-sidebar="showSidebar" />
  <div class="header__input">
    <InputBox />
  </div>
</template>
<script lang="ts" setup>
import { defineEmits } from 'vue'
import InputBox from '@/components/InputBox.vue'
import StartTab from '@/components/StartTab.vue'

interface Emits {
  (event: 'show-sidebar'): void
}
const emits = defineEmits<Emits>()

const showSidebar = (): void => {
  emits('show-sidebar')
}
</script>
