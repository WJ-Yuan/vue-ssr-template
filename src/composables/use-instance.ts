import { getCurrentInstance } from 'vue'

export const useInstance = () => {
  return getCurrentInstance()!
}

export const useGlobal = () => {
  const instance = useInstance()

  return instance.appContext.config.globalProperties
}
