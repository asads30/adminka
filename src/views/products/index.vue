<template>
  <div class="app-container">
    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
    >
      <el-table-column label="ID" prop="id" align="center" width="80">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Название" min-width="100px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Название" min-width="150px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.description }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Автор" width="100px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.user_id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Канал" width="100px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.channel_id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Цена" width="120px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.price }} рублей</span>
        </template>
      </el-table-column>
      <el-table-column label="Зарегистрирован" width="180px" align="center">
        <template slot-scope="{row}">
          <span>{{ Date.parse(row.createdAt) | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Активность" width="180px" align="center">
        <template slot-scope="{row}">
          <span>{{ Date.parse(row.updatedAt) | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.pageSize" @pagination="fetchData" />

  </div>
</template>

<script>
import { getProducts } from '@/api/app'
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination'

export default {
  name: 'Products',
  components: { Pagination },
  data() {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        pageSize: 50
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getProducts(this.listQuery).then(response => {
        this.list = response.products
        this.total = response.totalProductCount
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    formatJson(filterVal) {
      return this.list.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    }
  }
}
</script>
