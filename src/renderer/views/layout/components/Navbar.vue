<template>
  <div>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="onToggleDrawer"></v-toolbar-side-icon>
      <v-toolbar-title>DockerCX</v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    methods: {
      onToggleDrawer () {
        this.$store.dispatch('toggleDrawer')
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>

