import Cookies from 'js-cookie'
import { getUsers, getChannels, getProducts, getPayments, getPayouts } from '@/api/app'

const state = {
  sidebar: {
    opened: true,
    withoutAnimation: false
  },
  device: 'desktop',
  users: [],
  channels: [],
  products: [],
  payments: [],
  payouts: [],
  stats: {
    users: null,
    channels: null,
    products: null,
    payments: null,
    payouts: null
  }
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  GET_USERS: (state, data) => {
    state.users = data.users
    state.stats.users = data.totalUserCount
  },
  GET_CHANNELS: (state, data) => {
    state.channels = data.channels
    state.stats.channels = data.totalChannelCount
  },
  GET_PRODUCTS: (state, data) => {
    state.products = data.products
    state.stats.products = data.totalProductCount
  },
  GET_PAYMENTS: (state, data) => {
    state.payments = data.payments
    state.stats.payments = data.totalPaymentsCount
  },

  GET_PAYOUTS: (state, data) => {
    state.payouts = data.paymentQueries
    state.stats.payouts = data.totalPaymentQueriesCount
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  getUsers({ commit }) {
    return new Promise((resolve, reject) => {
      getUsers().then(response => {
        const data = response
        commit('GET_USERS', data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getChannels({ commit }) {
    return new Promise((resolve, reject) => {
      getChannels().then(response => {
        const data = response
        commit('GET_CHANNELS', response)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getProducts({ commit }) {
    return new Promise((resolve, reject) => {
      getProducts().then(response => {
        const data = response
        commit('GET_PRODUCTS', response)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getPayments({ commit }) {
    return new Promise((resolve, reject) => {
      getPayments().then(response => {
        const data = response
        commit('GET_PAYMENTS', response)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  getPayouts({ commit }) {
    return new Promise((resolve, reject) => {
      getPayouts().then(response => {
        const data = response
        commit('GET_PAYOUTS', response)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
