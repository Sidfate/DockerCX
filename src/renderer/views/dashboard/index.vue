<template>
  <a-list
          :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }"
          :dataSource="data"
  >
    <a-list-item slot="renderItem" slot-scope="item, index">
      <a-card :title="item.title">Card content</a-card>
    </a-list-item>
  </a-list>
</template>

<script>
  export default {
    name: 'dashboard',
    data () {
      return {
        data: [
          {
            title: 'Title 1'
          },
          {
            title: 'Title 2'
          },
          {
            title: 'Title 3'
          },
          {
            title: 'Title 4'
          },
          {
            title: 'Title 5'
          },
          {
            title: 'Title 6'
          }
        ]
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
