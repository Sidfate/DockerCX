<template>
  <div>
    <a-card title="Images">
      <a-button type="primary" slot="extra"><router-link :to="{path: '/images/new'}">Build an image</router-link></a-button>

      <a-list
              :grid="{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 2, xl: 3, xxl: 3 }"
              :dataSource="data"
      >
        <a-list-item slot="renderItem" slot-scope="item, index">
          <template>
            <a-card
                    hoverable
                    style="width: 300px"
            >
              <ul class="ant-card-actions" slot="actions">
                <li style="width: 33.3333%;"><a-icon type="setting" /></li>
                <li style="width: 33.3333%;"><a-icon type="edit" /></li>
                <li style="width: 33.3333%;"> <a-icon type="ellipsis" /></li>
              </ul>
              <a-card-meta
                      :title="item.tag.repository"
                      description="This is the description">
                <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </a-card-meta>
              <div>
                <a-icon type="tag" /> {{ item.tag.tag }}
              </div>
            </a-card>
          </template>
        </a-list-item>
      </a-list>
    </a-card>
  </div>
</template>

<script>
  import dataTable from '@/components/DataTable'
  import { getImageAbbrId, getTagInfo } from '@/utils'

  export default {
    name: 'images-index',
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
        this.data = []
        const images = await this.$docker.listImages()

        console.log(images)
        images.forEach(e => {
          const tagInfo = getTagInfo(e.RepoTags[0])

          this.data.push({
            Id: getImageAbbrId(e.Id),
            tag: tagInfo,
            Created: e.Created,
            Size: e.Size
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>