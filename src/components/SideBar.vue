<template>
  <!-- detail tab -->
  <template v-if="isOpen">
    <!-- width값에 따라 bar3 아이콘, 유튜브 로고 포함 여부 -->
    <template v-if="isFullWidthSidebar">
      <!-- Bar3와 유튜브 로고가 포함된 bar를 보여줌 -->
      <StartTab @show-sidebar="showSidebar" />
    </template>
    detail tab info...
  </template>
  <!-- simple tab -->
  <template v-else>
    <div class="flex flex-col">
      <div class="flex flex-col items-center">
        <HomeIcon class="w-6 text-black" />
        <div class="">홈</div>
      </div>
    </div>
  </template>
</template>
<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted, defineProps } from 'vue'
import { HomeIcon } from '@heroicons/vue/24/outline'
import StartTab from './StartTab.vue'

interface Emits {
  (event: 'show-sidebar'): void
}
interface Props {
  isOpen: boolean
}

const emits = defineEmits<Emits>()
const props = defineProps<Props>()

const showSidebar = (): void => {
  emits('show-sidebar')
}

const windowWidth = ref(window.innerWidth)
const updateWidth = () => {
  windowWidth.value = window.innerWidth
}

const isFullWidthSidebar = computed(() => windowWidth.value <= 768)

onMounted(() => {
  window.addEventListener('resize', updateWidth)
})
onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})
</script>
