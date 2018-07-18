<template>
  <v-card
          color="grey lighten-4"
          flat
          width="100%"
  >
    <v-toolbar>
      <v-icon>dns</v-icon>
      <v-toolbar-title>Containers</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>

    <div class="table-actions">
      <v-btn-toggle v-model="batchAction">
        <v-btn flat value="start" :disabled="!batchStatus">
          <span>Start</span>
          <v-icon>play_arrow</v-icon>
        </v-btn>
        <v-btn flat value="stop" :disabled="!batchStatus">
          <span>Stop</span>
          <v-icon>stop</v-icon>
        </v-btn>
        <v-btn flat value="kill" :disabled="!batchStatus">
          <span>Kill</span>
          <v-icon>not_interested</v-icon>
        </v-btn>
        <v-btn flat value="restart" :disabled="!batchStatus">
          <span>Restart</span>
          <v-icon>loop</v-icon>
        </v-btn>
      </v-btn-toggle>
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
          <td>{{ props.Name }}</td>
          <td class="text-xs-left"><v-chip>{{ props.item.Image }}</v-chip></td>
          <td class="text-xs-left">{{ props.item.State }}</td>
          <td class="text-xs-left">{{ props.item.State }}</td>
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
        return formatString(id, 8)
      }
    },
    data: () => ({
      batchAction: null,
      batchStatus: false,
      pagination: {
        sortBy: 'State'
      },
      selected: [],
      headers: [
        { text: 'Name', value: 'Name' },
        { text: 'Image', value: 'Image' },
        { text: 'State', value: 'State' },
        { text: 'Ports', value: 'Ports' }
      ],
      desserts: []
    }),
    async created () {
      await this.listContainers()
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
      async listContainers () {
        this.desserts = await this.$docker.listContainers({all: true})
      }
    }
  }
</script>

<style scoped>

</style>