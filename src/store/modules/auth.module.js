import axios from 'axios'
import { TOKEN_KEY, API_KEY, AUTH_URL } from '../../constants'
import { errorHandlerAuth } from '../../utils/ErrorUtil'

export default {
  namespaced: true,
  state() {
    return {
      token: localStorage.getItem(TOKEN_KEY)
    }
  },
  getters: {
    token(state) {
      return state.token
    },
    hasToken(_, getters) {
      return !!getters.token
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem(TOKEN_KEY, token)
    },
    removeToken(state) {
      state.token = null
      localStorage.removeItem(TOKEN_KEY)
    }
  },
  actions: {
    async loginUser({ commit }, payload) {
      const url = AUTH_URL + API_KEY
      try {
        const { data } = await axios.post(url, { ...payload, returnSecureToken: true })
        commit('setToken', data.idToken)
      } catch(e) {
        const messageError = errorHandlerAuth(e)
        throw Error(messageError)
      }
    }
  }
}