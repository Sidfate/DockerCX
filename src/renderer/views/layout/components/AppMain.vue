<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout
              justify-center
              align-center
      >
        <router-view :key="key"></router-view>
      </v-layout>
    </v-container>
  </v-content>
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
