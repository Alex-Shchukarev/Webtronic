import { USER_KEY, userData } from '../../constants'

export default {
  namespaced: true,
  state() {
    return {
      user: JSON.parse(localStorage.getItem(USER_KEY)) ?? {}
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  },
  mutations: {
    load(state) {
      localStorage.setItem(USER_KEY, JSON.stringify(userData))
      state.user = JSON.parse(localStorage.getItem(USER_KEY))
    },
    changeUserData(state) {
      const user = { ...state.user }
      localStorage.setItem(USER_KEY, JSON.stringify(user))
    }    
  },
  actions: {
    loadUserData({commit}) {
      commit('load')
    },
    updateUserData({commit}) {
      commit('changeUserData')
    }
  }
}