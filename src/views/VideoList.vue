<template>
  <!-- chips -->
  <div class="chips__container">
    <div v-for="category in chipsList" :key="category">
      <button type="button" class="chips__container-button">
        {{ category }}
      </button>
    </div>
  </div>
  <div class="videos__container">
    <div class="video-card" v-for="video in videoList" :key="video.id">
      <div class="video-card__thumbnail">
        <img :src="video.snippet.thumbnails.medium.url" alt="thumbnail" />
      </div>
      <div class="video-card__details">
        <div class="video-card__details-title">
          {{ video.snippet.title }}
        </div>
        <div calss="video-card__channel">
          {{ video.snippet.channelTitle }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import apiService from '../services/apiService'
import type { VideoResponse } from '../components/models'

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

const videoList = ref()
const getVideoList = () => {
  apiService
    .getFakeVideoList()
    .then((res: VideoResponse) => {
      videoList.value = res.items
      console.log('videoList.value::::', videoList.value)
    })
    .catch((err) => {
      console.log('catch', err)
    })
}

//
// channelTitle : 채널명

onMounted(() => {
  getVideoList()
})
</script>
