<template>
  <a-layout-header :style="{ background: '#fff', padding: 0 }" >
    <a-icon
            class="trigger"
            :type="isCollapse ? 'menu-unfold' : 'menu-fold'"
            @click="toggleSideBar"
    />
  </a-layout-header>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Navbar',
    computed: {
      ...mapGetters([
        'sidebar',
        'selectedName'
      ]),
      isCollapse () {
        return !this.sidebar.opened
      }
    },
    methods: {
      toggleSideBar () {
        this.$store.dispatch('toggleSidebar')
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color .3s;
  }
  .trigger:hover {
    color: #1890ff;
  }
</style>

