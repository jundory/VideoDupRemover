import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_CORE_LOCAL, //vite에서는 process.env 대신 import.meta.env를 사용
  // headers: {
  //   'Access-control-Allow-Origin': '*',
  // }
})

// api.interceptors.request.use(
//   (config) => {
//     // const token = store.getToken;
//     // token 찾아 config.header에 추가
//   },
//   (error) => {
//     // error 처리
//   },
// )

// api.interceptors.response.use(
//   (response) => {
//     //status code에 따라서 처리
//   },
//   (error) => {
//     // error 처리
//   },
// )

export default api
