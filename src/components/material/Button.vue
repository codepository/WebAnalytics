<template>
  <v-btn
    :loading="loading"
    :color="color"
    :block="block"
    @click="click"
  >
    <span v-if="!loading"><slot>确 定</slot></span>
    <span v-else>loading..</span>
  </v-btn>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: 'secondary'
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    loading: false
  }),
  methods: {
    click () {
      // console.log('click')
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
      this.$emit('click')
    }
  }
}
</script>
