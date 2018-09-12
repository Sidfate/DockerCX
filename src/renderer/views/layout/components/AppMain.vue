<template>
  <a-layout-content :style="{ margin: '24px 16px', 'overflow-y': 'auto' }">
    <router-view :key="key"></router-view>
  </a-layout-content>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key () {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  }
}
</script>
