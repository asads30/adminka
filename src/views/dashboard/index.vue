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
      this.$store.dispatch('app/getUsers')
      this.$store.dispatch('app/getChannels')
      this.$store.dispatch('app/getProducts')
      this.$store.dispatch('app/getPayments')
      this.$store.dispatch('app/getPayouts')
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
