<template>
  <div>
    시청화면
    <iframe
      :width="1024"
      :height="600"
      :src="`https://www.youtube.com/embed/${videoId}?enablejsapi=1`"
      frameborder="0"
      allowfullscreen
      referrerpolicy="origin"
    >
    </iframe>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const videoId = ref<string | undefined>()
onMounted(() => {
  videoId.value = route.params.videoId as string
  console.log('route.query.id 전달 :: ', videoId.value)
})
</script>
