<template>
  <v-layout
    row
    justify-center>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ head }}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <slot/>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn
            color="blue darken-1"
            text
            @click="cancel">取消</v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="ok">确定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
  name: 'Dialogs',
  props: {
    head: {
      type: String,
      default: undefined
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    dialog: false
  }),
  watch: {
    'show' (val) {
      this.dialog = val
    },
    dialog (val) {
      this.$emit('update:show', val)
    }
  },
  methods: {
    cancel () {
      this.dialog = false
    },
    ok () {
      this.dialog = false
      this.$emit('ok')
    }
  }
}
</script>
