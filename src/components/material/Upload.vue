<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-btn
          depressed
          color="info"
          @click="upload">
          <slot>上传</slot>
        </v-btn>
        <input
          id="upload"
          ref="upload"
          type="file"
          accept=".xls,.xlsx"
          @change="change">
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  methods: {
    upload () {
      let btn = this.$refs.upload
      btn.click()
    },
    async change (e) {
      this.$emit('change', e.target.files[0])
    }
  }
}
</script>
<style scoped>
#upload{
    height: 0;
    width: 0;
    visibility: hidden;
}
</style>
