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

export function authDate() {
  return Cookies.get('auth_date')
}

export function setAuthDate(auth_date) {
  return Cookies.set('auth_date', auth_date)
}

export function removeAuthDate() {
  return Cookies.remove('auth_date')
}

export function firstName() {
  return Cookies.get('first_name')
}

export function setFirstName(first_name) {
  return Cookies.set('first_name', first_name)
}

export function removeFirstName() {
  return Cookies.remove('first_name')
}

export function userId() {
  return Cookies.get('user_id')
}

export function setUserId(user_id) {
  return Cookies.set('user_id', user_id)
}

export function removeUserId() {
  return Cookies.remove('user_id')
}

export function username() {
  return Cookies.get('username')
}

export function setUsername(username) {
  return Cookies.set('username', username)
}

export function removeUsername() {
  return Cookies.remove('username')
}

export function hash_data() {
  return JSON.parse(Cookies.get('auth_date') + ' ' + Cookies.get('first_name'))
}
