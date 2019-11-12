<template>
  <v-content>
    <div id="core-view">
      <!-- <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition> -->
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"/>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"/>
    </div>
    <!-- <core-footer v-if="$route.name !== 'Maps'" /> -->
  </v-content>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: 'vuetify-admin'
    }
  }
}
</script>

<style>
#core-view {
  padding-bottom: 50px;
}
</style>
