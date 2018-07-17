<template>
  <v-flex text-xs-center>
    <v-tooltip left>
      <v-btn slot="activator" :href="source" icon large target="_blank">
        <v-icon large @click="test">code</v-icon>
      </v-btn>
      <span>Source</span>
    </v-tooltip>
    <v-tooltip right>
      <v-btn slot="activator" icon large href="https://codepen.io/johnjleider/pen/rJdVMq" target="_blank">
        <v-icon large>mdi-codepen</v-icon>
      </v-btn>
      <span>Codepen</span>
    </v-tooltip>
  </v-flex>
</template>

<script>
  export default {
    name: 'dashboard'
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
