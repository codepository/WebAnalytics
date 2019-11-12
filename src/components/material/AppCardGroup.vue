<template>
  <v-flex
    xs12
    sm12
    md12
    lg12
  >
    <material-card
      class="card-tabs">
      <v-layout
        row
        wrap
      >
        <v-flex
          v-for="card in items"
          :key="card.title"
          xs3
          sm2
          md2
          lg1
        >
          <material-app-card
            :badge-color="card.badgeColor"
            :color="card.color"
            :icon="card.icon"
            :title="card.title"
            :badge="card.badge"
            @click="click(card.title)"
        /> </v-flex>
      </v-layout>
    </material-card>
  </v-flex>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: undefined
    }
  },
  data: () => ({
  }),
  methods: {
    click (title) {
      this.$Message.error('router name 要等于【' + title + '】')
      this.$router.push({
        name: title
      })
    }
  }
}
</script>
