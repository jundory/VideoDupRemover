<template>
  <div class="video__container">
    <iframe
      class="video__iframe"
      id="player"
      type="text/html"
      :src="videoUrl"
      frameborder="0"
      allowfullscreen
      referrerpolicy="origin"
    >
      <!-- referrerpolicy로 cors 보안 정책 비활성화 -->
    </iframe>
  </div>
  <div class="video__columns">
    <div class="meta-box">
      <div class="meta-box__title">
        {{ videoStore.snippet.localized.title }}
      </div>
      <div class="meta-box__channel">
        {{ videoStore.snippet.channelTitle }}
      </div>
      <div class="meta-box__desc">
        {{ videoStore.snippet.localized.description }}
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useVideoStore } from '../stores/videoStore'

const route = useRoute()

const videoId = ref<string | undefined>()
const videoUrl = ref<string | undefined>()

const videoStore = useVideoStore()
onMounted(() => {
  // videoId.value = route.params.videoId as string
  videoId.value = route.query.v as string
  videoUrl.value = `https://www.youtube.com/embed/${videoId.value}?autoplay=1&mute=1` //정책상 mute 있어야 바로 재생 가능

  console.log('videoDetailInfo:::', videoStore.snippet)
})
</script>
