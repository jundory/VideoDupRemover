<template>
  <div>
    {{ videoUrl }}
    <!-- <iframe
      id="player"
      type="text/html"
      :width="1024"
      :height="600"
      :src="videoUrl"
      frameborder="0"
      allowfullscreen
      referrerpolicy="origin"
    >
    </iframe> -->
    <iframe
      :width="1024"
      :height="600"
      :src="`https://www.youtube.com/embed/${videoId}`"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const videoId = ref<string | undefined>()
const videoUrl = ref<string | undefined>()
onMounted(() => {
  // videoId.value = route.params.videoId as string
  videoId.value = route.query.v as string
  videoUrl.value = `https://www.youtube.com/embed/${videoId.value}?autoplay=1&mute=1&enablejsapi=1`
  console.log('videoUrl.value :: ', videoId.value)
})
</script>
