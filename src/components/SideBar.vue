<template>
  <!-- detail과 simple 2가지로 구분 필요 -->
  <template v-if="isOpen">
    <!-- width값에 따라 bar3 아이콘, 유튜브 로고 포함 여부 -->
    detail side info
  </template>
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
import { onMounted, defineProps } from 'vue'
import { HomeIcon } from '@heroicons/vue/24/outline'

interface Props {
  isOpen: boolean
}

const props = defineProps<Props>()

onMounted(() => {
  console.log('open the sidebar', props.isOpen)
})
</script>
