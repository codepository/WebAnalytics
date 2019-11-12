<template>
  <v-flex
    xs12
    sm12
    md12
    lg12
  >
    <v-layout wrap>
      <v-flex
        v-for="(item, index) in items"
        :key="index"
        xs12
        sm4
        md4
        lg3
      >
        <material-stats-card
          :color="item.color"
          :icon="item.icon"
          :title="item.title"
          :value="item.value"
          :sub-icon="item.subicon"
          :sub-text="item.subtext"
          @click="route(item.route)"
        />
      </v-flex>
    </v-layout>
  </v-flex>
</template>
<script>
export default {
  data: () => ({
    items: [
      { color: 'green', icon: 'mdi-gavel', title: '审批', route: '我审批的', value: '1', subicon: 'mdi-calendar', subtext: 'subtext' },
      { color: 'red', icon: 'mdi-phone', title: '通讯录', route: '通讯录', value: '1', subicon: 'mdi-calendar', subtext: 'subtext' }
    ]
  }),
  methods: {
    route (route) {
      this.$router.push({
        name: route
      })
    }
  }
}
</script>
