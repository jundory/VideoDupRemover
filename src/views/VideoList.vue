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
import { CHIPS_LIST } from '../common/constants'

const chipsList = ref(CHIPS_LIST)

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
