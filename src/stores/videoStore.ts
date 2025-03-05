import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { snippetType } from '@/components/models'

export const useVideoStore = defineStore('video', () => {
  const snippet = ref({
    localized: {
      title: '',
      description: '',
    },
    channelTitle: '',
    publishedAt: '',
  })

  const setSnippet = (data: snippetType) => {
    snippet.value.localized = data.localized
    snippet.value.channelTitle = data.channelTitle
    snippet.value.publishedAt = data.publishedAt
  }

  return { snippet, setSnippet }
})
