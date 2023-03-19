<template>
  <div class="dashboard-container">
    <panel-group />
    <transaction />
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import Transaction from './components/Transaction'

export default {
  name: 'Dashboard',
  components: {
    PanelGroup,
    Transaction
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.$store.dispatch('app/getUsers', { page: 1, pageSize: 50 })
      this.$store.dispatch('app/getChannels', { page: 1, pageSize: 50 })
      this.$store.dispatch('app/getProducts', { page: 1, pageSize: 50 })
      this.$store.dispatch('app/getPayments', { page: 1, pageSize: 50 })
      this.$store.dispatch('app/getPayouts', { page: 1, pageSize: 50 })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
