<template>
  <div>
    <a-card title="Build an image">
      <a-tabs defaultActiveKey="1" @change="callback">
        <a-tab-pane tab="Dockerfile" key="1">Content of Tab Pane 1</a-tab-pane>
        <a-tab-pane tab="Tab 2" key="2" forceRender>Content of Tab Pane 2</a-tab-pane>
        <a-tab-pane tab="Tab 3" key="3">Content of Tab Pane 3</a-tab-pane>
      </a-tabs>
    </a-card>
  </div>
</template>

<script>
  export default {
    name: 'images-new',
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ],
      checkbox: false
    }),

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          console.log(111)
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style scoped>

</style>