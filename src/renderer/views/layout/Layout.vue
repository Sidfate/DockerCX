<template>
  <a-layout style="height: 100%;">
    <sidebar></sidebar>
    <a-layout>
      <navbar></navbar>
      <app-main></app-main>
    </a-layout>
  </a-layout>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'

export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
