<template>
  <!-- chips -->
  <div class="chips__container">
    <div v-for="category in chipsList" :key="category">
      <button type="button" class="chips__container-button">
        {{ category }}
      </button>
    </div>
  </div>
  <div class="videos__container">영상 리스트 화면</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const chipsList = ref([
  '전체',
  '게임',
  '음악',
  '야구',
  '라이브',
  '믹스',
  '시트콤',
  '축구',
  '애니메이션',
  '요리',
  '최근에 업로드된 동영상',
])
</script>
