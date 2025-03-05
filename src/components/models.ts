// interface 모델링은 여기서
export interface VideoResponse {
  kind: string
  etag: string
  items: VideoItemResponse[]
  nextPageToken?: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
}

export interface VideoItemResponse {
  kind: string
  etag: string
  id: string
  snippet: snippetType
}

interface snippetType {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: object
  channelTitle: string
  tags: string[]
  categoryId: string
  liveBroadcastContent: string
  localized: {
    title: string
    description: string
  }
  defaultAudioLanguage: string
}

// interface thumbnails {}
