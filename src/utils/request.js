import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: '/admin/',
  withCredentials: true,
  timeout: 5000
})

service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
