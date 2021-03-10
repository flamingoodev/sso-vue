import Vue from 'vue'
import Vuex from 'vuex'
import userApi from '@/api/user'
import { setToken } from '@/utils/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    username: ''
  },
  mutations: {
    token (state, token) {
      state.token = token
    },
    username (state, username) {
      state.username = username
    }
  },
  actions: {
    login ({ commit }, params) {
      return new Promise((resolve, reject) => {
        userApi.login(params).then(res => {
          setToken(res.data.data)
          commit('token', res.data.data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    username ({ commit }) {
      return new Promise((resolve) => {
        commit('username')
        resolve()
      })
    }
  }
})
