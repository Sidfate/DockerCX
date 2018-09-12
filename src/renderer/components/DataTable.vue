<template>
  <a-table :columns="columns" :dataSource="data" bordered :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}">
    <template slot="title" slot-scope="currentPageData">
      <a-icon type="database" />
      {{ header }}
    </template>
    <a-tag slot="tag" slot-scope="text" color="green">{{ text }}</a-tag>
  </a-table>
</template>

<script>
  export default {
    name: 'dataTable',
    props: {
      data: {
        type: [Array, Object],
        required: true
      },
      columns: {
        type: Array,
        default: () => []
      },
      header: {
        type: String,
        default: 'table'
      }
    },
    data: () => {
      return {
        selectedRowKeys: []
      }
    },
    methods: {
      onSelectChange (selectedRowKeys) {
        console.log('selectedRowKeys changed: ', selectedRowKeys)
        this.selectedRowKeys = selectedRowKeys
      }
    }
  }
</script>

<style scoped>

</style>