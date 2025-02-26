import api from './axios'
import type { VideoResponse } from '@/components/models'

const apiService = {
  // getVideoList: async (): Promise<videoResponse> => {
  //   const data = await api.get('/list')
  //   return data
  // },

  getFakeVideoList: async (): Promise<VideoResponse> => {
    const videoList = await api.get('/public/mockData/sample.json')
    console.log(videoList, 'DFASDFF')
    return videoList.data //axiosResponse<T>를 반환하므로, data만 반환하도록 처리
  },
}

export default apiService
