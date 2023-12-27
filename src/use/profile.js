import { useStore } from 'vuex'
import { computed } from 'vue'
import { cities } from '../constants'

export function useProfile() {
  const store = useStore()
  const options = cities

  const user = computed(() => store.getters['user/user'])

  const changeUser = async () => {
    await store.dispatch('user/updateUserData')
  }

  return { user, options, changeUser }
}