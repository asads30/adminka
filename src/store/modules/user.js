import { getToken, setHash, setToken, removeToken, setAuthDate, setFirstName, setUserId, setUsername } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: ''
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  }
}

const actions = {
  login({ commit }, userInfo) {
    return new Promise(resolve => {
      setToken('admin-token')
      setHash(userInfo.hash)
      setAuthDate(userInfo.auth_date)
      setFirstName(userInfo.first_name)
      setUserId(userInfo.id)
      setUsername(userInfo.username)
      commit('SET_TOKEN', 'admin-token')
      resolve()
    })
  },

  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      if (state.token) {
        commit('SET_NAME', 'Super Admin')
        commit('SET_AVATAR', 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif')
        resolve()
      } else {
        reject('error')
      }
    })
  },

  logout({ commit }) {
    return new Promise(resolve => {
      removeToken()
      resetRouter()
      commit('RESET_STATE')
      resolve()
    })
  },

  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken()
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

