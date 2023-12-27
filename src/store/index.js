import { createStore } from 'vuex'
import auth from './modules/auth.module'
import user from './modules/profile.module'

export default createStore({
  state() {
    return {
      currentPath: []
    }
  },
  getters: {
    currentPath(state) {
      return state.currentPath
    }
  },
  mutations: {
    setNewPath(state, payload) {
      state.currentPath = payload.includes(' ') ? payload.split(' ') : [`${payload}`]
    }
  },
  actions: {
    changePath({commit}, payload) {
      commit('setNewPath', payload)
    }
  },
  modules: {
    auth, user
  }
})
