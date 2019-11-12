<template>
  <v-layout
    row>
    <v-autocomplete
      v-model="hour1"
      :items="hours1"
      label="小时"
      @change="change"
    />
    <v-autocomplete
      v-model="second1"
      :items="seconds1"
      label="秒"
      @change="change"
    />
  </v-layout>
</template>
<script>
export default {
  props: {
    hour: {
      type: String,
      default: '00'
    },
    second: {
      type: String,
      default: '00'
    },
    times: {
      type: String,
      default: '00:00'
    }
  },
  data: () => ({
    hour1: '00',
    hours1: [],
    second1: '00',
    seconds1: [],
    times1: '00:00'
  }),
  watch: {
    'hour' (val) {
      this.hour1 = val
    },
    'second' (val) {
      this.second1 = val
    },
    'times' (val) {
      this.times1 = val
    },
    times1 (val) {
      // console.log(val)
      this.$emit('update:times', val)
    }
  },
  mounted () {
    this.generateHours()
    this.generateSeconds()
  },
  methods: {
    generateHours () {
      for (var i = 0; i < 24; i++) {
        this.hours1.push(('0' + i).substr(-2))
      }
    },
    generateSeconds () {
      for (var i = 0; i < 60; i++) {
        this.seconds1.push(('0' + i).substr(-2))
      }
    },
    change () {
      this.times1 = this.hour1 + ':' + this.second1
    }
  }
}
</script>
