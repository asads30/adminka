import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getHash() {
  return Cookies.get('hash')
}

export function setHash(hash) {
  return Cookies.set('hash', hash)
}

export function getTg() {
  return Cookies.get('tg')
}

export function setTg(token) {
  return Cookies.get('tg', token)
}
