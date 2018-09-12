<template>
  <a-list
    :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }"
    :dataSource="data"
  >
    <a-list-item slot="renderItem" slot-scope="item, index">
      <a-card :title="item.Name">Card content</a-card>
    </a-list-item>
  </a-list>
</template>

<script>
  import dataTable from '@/components/DataTable'
  import { getImageAbbrId } from '@/utils'

  export default {
    name: 'container-index',
    components: { dataTable },
    data () {
      return {
        data: []
      }
    },
    async created () {
      await this.fetchData()
    },
    methods: {
      async fetchData () {
        const containers = await this.$docker.listContainers({ all: true })
        // 数据处理
        // ...
        containers.forEach(e => {
          this.data.push({
            State: e.State,
            Name: e.Names[0],
            Image: getImageAbbrId(e.ImageId),
            IP: ''
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>