import axios from 'axios'
import { Message } from 'element-ui'
import { authDate, firstName, userId, username } from '@/utils/auth'

const service = axios.create({
  baseURL: '/admin/',
  withCredentials: true,
  timeout: 5000
})

const test = `auth_date=${authDate}\nfirst_name=${firstName}\nid=${userId}\nusername=${username}`

console.log(test)

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
