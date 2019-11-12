<template>
  <v-flex
    xs12
    sm12
    md12
    lg12
    row>
    <v-flex
      v-for="(item, index) in items"
      :key="index"
      style="display:inline-block">
      <div
        style="display:inline-block"
        @click="click(index)">{{ item }}<v-icon>mdi-forward</v-icon></div>
    </v-flex>
  </v-flex>
</template>
<script>

export default {
  props: {
    selected: {
      type: Array,
      default: undefined
    }
  },
  data: () => ({
    isActive: false,
    current: 0,
    currentIndex: 0,
    items: []
  }),
  watch: {
    selected: {
      handler (newval) {
        this.selectedChange(newval)
      },
      deep: true
    }
  },
  mounted () {
    this.initial()
  },
  methods: {
    initial () {
      if (this.selected.length > 0) {
        this.selectedChange(this.selected)
      }
    },
    selectedChange (val) {
      this.items = val
      this.currentIndex = this.items.length - 1
    },
    click (index) {
      if (this.currentIndex !== index) {
        this.currentIndex = index
        this.items = this.items.splice(0, index + 1)
        this.$emit('update:selected', this.items)
      }
      // console.log('index, currentindex:', index, this.currentIndex)
    }
  }
}
</script>
