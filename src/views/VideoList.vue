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
    <template v-for="video in videoList" :key="video.id">
      <div class="video-card" @click="watchVideo(video)">
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
    </template>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import apiService from '../services/apiService'
import { useVideoStore } from '@/stores/videoStore'
import type { VideoResponse, VideoItemResponse } from '../components/models'
import { CHIPS_LIST } from '../common/constants'

const router = useRouter()
const videoStore = useVideoStore()
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

const watchVideo = (video: VideoItemResponse): void => {
  console.log(video.id)
  router.push({
    path: '/watch',
    query: { v: video.id },
    // title: video.snippet.title,
    // description: video.snippet.description,
  })
  const videoDetailInfo = {
    localized: video.snippet.localized,
    channelTitle: video.snippet.channelTitle,
    publishedAt: video.snippet.publishedAt,
  }
  videoStore.setSnippet(videoDetailInfo)
  // router.push(`/watch/${id}`)
}

//
// channelTitle : 채널명

onMounted(() => {
  getVideoList()
})
</script>
