<template>
  <a-layout-sider
    :trigger="null"
    collapsible
    v-model="isCollapse"
  >
    <div class="logo"></div>
    <a-menu theme="dark" mode="inline" :defaultSelectedKeys="[$route.path]">
      <template v-for="(item, key) in routes" v-if="!item.hidden">
          <a-menu-item :key="item.path">
            <router-link :to="item.path"
                         :key="item.name">
              <a-icon :type="item.meta.icon" />
              <span class="nav-text">{{ item.meta.title }}</span>
            </router-link>
          </a-menu-item>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'SideBar',
    computed: {
      ...mapGetters([
        'sidebar'
      ]),
      isCollapse () {
        return !this.sidebar.opened
      },
      routes () {
        console.log(this.$route.path)
        return this.$router.options.routes
      }
    }
  }
</script>

<style scoped>
  .logo {
    height: 32px;
    background: rgba(255,255,255,.2);
    margin: 16px;
  }
</style>