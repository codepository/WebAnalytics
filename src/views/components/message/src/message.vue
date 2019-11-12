<template>
  <v-snackbar
    :color="inconColor"
    :timeout="3000"
    v-model="show"
    top
    style="margin-top:20%;"
  >
    <v-icon
      x-large
      color="white"
      class="mr-3"
    >
      mdi-bell-plus
    </v-icon>
    <div style="font-size: large"> {{ text }}</div>
    <v-icon
      x-large
      @click="show = false"
    >
      mdi-close-circle
    </v-icon>
  </v-snackbar>

</template>

<script type="text/babel">
const typeMap = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error'
}
export default {
  data () {
    return {
      show: false,
      text: '',
      type: ''
    }
  },
  computed: {
    inconColor () {
      return this.type
        ? `${typeMap[this.type]}`
        : ''
    }
  },
  mounted () {
  },
  created () {
    console.log('A组件被创建了')
  },
  beforeDestroy () {
    this.show = false
    console.log('A组件被beforeDestroy')
  },
  destroyed () {
    console.log('A组件被destroyed')
    console.log(this)
  },
  methods: {
    destroy () {
      var vm = this
      vm.show = false
      // vm.show = false
      if (vm.$el && vm.$el.parentNode) {
        vm.$el.parentNode.removeChild(vm.$el)
      }
      vm.$destroy()
    }
  }

}
</script>
