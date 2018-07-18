<template>
  <v-navigation-drawer
          v-model="drawerStatus"
          fixed
          app
  >
    <v-list dense>
      <v-list-tile @click="goPage('/dashboard')">
        <v-list-tile-action>
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Dashboard</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="goPage('/containers')">
        <v-list-tile-action>
          <v-icon>dns</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Containers</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="goPage('/images')">
        <v-list-tile-action>
          <v-icon>library_books</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Images</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'SideBar',
    computed: {
      ...mapGetters([
        'drawer'
      ])
    },
    watch: {
      drawerStatus (val) {
        if (!val) {
          this.$store.dispatch('toggleDrawer')
        }
      },
      drawer (val) {
        this.drawerStatus = val
      }
    },
    data () {
      return {
        drawerStatus: null
      }
    },
    mounted () {
      this.drawerStatus = this.$store.getters.drawer
    },
    methods: {
      goPage (url) {
        this.$router.push(url)
      }
    }
  }
</script>

<style scoped>

</style>