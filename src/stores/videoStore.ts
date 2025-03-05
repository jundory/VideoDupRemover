import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useVideoStore = defineStore('video', () => {
  const snippet = ref({
    localized: {
      title: '',
      desciption: '',
    },
    channelTitle: '',
    publishedAt: '',
  })

  const setSnippet = (data: any) => {
    snippet.value.localized = data.localized
    snippet.value.channelTitle = data.channelTitle
    snippet.value.publishedAt = data.publishedAt
  }

  return { snippet, setSnippet }
})
