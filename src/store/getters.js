const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  users: state => state.app.users,
  payments: state => state.app.payments,
  stats: state => state.app.stats
}
export default getters
