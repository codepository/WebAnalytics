<template>
  <v-layout
    row
    justify-center>
    <v-dialog
      v-model="show"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">提示框</v-card-title>
        <v-card-text>
          {{ text }}
        </v-card-text>

        <v-card-actions>
          <v-spacer/>

          <v-btn
            color="green darken-1"
            text
            @click="close('cancel')"
          >
            取消
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="close('ok')"
          >
            确定
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
  data () {
    return {
      show: false,
      text: ''
    }
  },
  created () {
    console.log('全局确认框 组件被创建了')
  },
  beforeDestroy () {
    console.log('全局确认框 被beforeDestroy')
  },
  destroyed () {
    console.log('全局确认框 被destroyed')
  }
}
</script>
