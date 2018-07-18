<template>
  <v-card
          color="grey lighten-4"
          flat
          width="100%"
  >
    <v-toolbar>
      <v-icon>library_books</v-icon>
      <v-toolbar-title>Images</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>

    <div class="table-actions">
      <v-btn :disabled="!batchStatus" color="error">
        <span>Remove</span>
        <v-icon>delete</v-icon>
      </v-btn>

      <router-link to="/image/new">
      <v-btn color="info">
        <span>Build a new image</span>
        <v-icon>add</v-icon>
      </v-btn>
      </router-link>
    </div>

    <v-data-table
            v-model="selected"
            :headers="headers"
            :items="desserts"
            :pagination.sync="pagination"
            select-all
            item-key="id"
            class="elevation-1"
    >
      <template slot="headers" slot-scope="props">
        <tr>
          <th>
            <v-checkbox
                    :input-value="props.all"
                    :indeterminate="props.indeterminate"
                    primary
                    hide-details
                    @click.native="toggleAll"
            ></v-checkbox>
          </th>
          <th
                  v-for="header in props.headers"
                  :key="header.text"
                  :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                  @click="changeSort(header.value)"
          >
            <v-icon small>arrow_upward</v-icon>
            {{ header.text }}
          </th>
        </tr>
      </template>
      <template slot="items" slot-scope="props">
        <tr :active="props.selected" @click="props.selected = !props.selected">
          <td>
            <v-checkbox
                    :input-value="props.selected"
                    primary
                    hide-details
            ></v-checkbox>
          </td>
          <td>{{ props.item.Id | getIdString }}</td>
          <td class="text-xs-left"><v-chip>{{ props.item.RepoTags[0] }}</v-chip></td>
          <td class="text-xs-left">{{ props.item.Size }}</td>
          <td class="text-xs-left">{{ props.item.Created }}</td>
        </tr>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  import { formatString } from '@/utils'

  export default {
    name: 'images-index',
    filters: {
      getIdString (id) {
        id = id.split(':')[1]
        return formatString(id, 8)
      }
    },
    data: () => ({
      batchStatus: false,
      pagination: {
        sortBy: 'Id'
      },
      selected: [],
      headers: [
        { text: 'Id', value: 'Id' },
        { text: 'Tags', value: 'Tags' },
        { text: 'Size', value: 'Size' },
        { text: 'Created', value: 'Created' }
      ],
      desserts: []
    }),
    async created () {
      await this.listImages()
    },
    methods: {
      toggleAll () {
        if (this.selected.length) this.selected = []
        else this.selected = this.desserts.slice()
      },
      changeSort (column) {
        if (this.pagination.sortBy === column) {
          this.pagination.descending = !this.pagination.descending
        } else {
          this.pagination.sortBy = column
          this.pagination.descending = false
        }
      },
      async listImages () {
        this.desserts = await this.$docker.listImages()
      }
    }
  }
</script>

<style scoped>

</style>