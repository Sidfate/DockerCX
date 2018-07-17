<template>
  <v-navigation-drawer
          v-model="drawerStatus"
          fixed
          app
  >
    <v-list dense>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="">
        <v-list-tile-action>
          <v-icon>contact_mail</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Contact</v-list-tile-title>
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
    }
  }
</script>

<style scoped>

</style>