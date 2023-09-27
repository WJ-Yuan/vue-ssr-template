import axios, { type AxiosRequestConfig } from 'axios'

export const createRequest = ({ baseURL = '', headers = {} }: AxiosRequestConfig) => {
  const instance = axios.create({
    headers,
    baseURL,
    timeout: 3000
  })

  instance.interceptors.request.use(
    (config) => {
      // TODO: add request config for yourself

      return config
    },
    (error) => {
      // TODO: add request error for yourself

      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    (response) => {
      // TODO: add request config for yourself

      return Promise.resolve(response.data)
    },
    (error) => {
      // TODO: add request config for yourself

      return Promise.reject(error)
    }
  )
}
