<template>
  <v-layout
    row
    wrap>
    <v-flex
      xs7
      sm7
      md6
      lg6>
      <material-date
        :label="label"
        :date.sync="date"/>
    </v-flex>
    <v-flex
      xs5
      sm5
      md6
      lg6>
      <material-times
        :times.sync="times"/>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: '选择日期'
    },
    datetimes: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    times: '',
    date: null,
    datetimes1: ''
  }),
  watch: {
    times (val) {
      // console.log(val)
      this.datetimes1 = this.date + ' ' + val
    },
    date (val) {
      // console.log(val)
      this.datetimes1 = val + ' ' + (this.times || '00:00')
    },
    'datetimes' (val) {
      this.datetimes1 = val
    },
    datetimes1 (val) {
      this.$emit('update:datetimes', val)
    }
  }
}
</script>
