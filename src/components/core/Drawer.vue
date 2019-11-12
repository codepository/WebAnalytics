<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    :mini-variant.sync="mini"
    app
    dark
    floating
    persistent
    mobile-break-point="991"
    width="260"
  >
    <v-list-item>
      <v-list-item-avatar>
        <v-img :src="$store.state.user.avatar || logo"/>
      </v-list-item-avatar>

      <v-list-item-title>{{ $store.state.user.userName || '未登陆' }}</v-list-item-title>

      <v-btn
        icon
        @click.stop="mini = !mini"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider/>

    <v-list dense>
      <v-list-item
        v-for="item in links"
        :key="item.text"
        :to="item.path"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import {
  mapMutations,
  mapState,
  mapActions
} from 'vuex'
export default {
  data: () => ({
    logo: './img/vuetifylogo.png',
    links: [
      {
        path: '/dashboard',
        icon: 'mdi-view-dashboard',
        text: '首页'
      },
      {
        path: '/icons',
        icon: 'mdi-view-dashboard',
        text: 'icon'
      }
    ],
    responsive: false,
    drawer: true,
    mini: true
  }),
  computed: {
    ...mapState(['image', 'color']),
    inputValue: {
      get () {
        return this.$store.state.user.drawer
      },
      set (val) {
        this.setDrawer(val)
      }
    },
    items () {
      return this.$t('Layout.View.items')
    },
    sidebarOverlayGradiant () {
      return `${this.$store.state.user.sidebarBackgroundColor}, ${this.$store.state.user.sidebarBackgroundColor}`
    }
  },
  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },
  methods: {
    ...mapMutations(['setDrawer', 'toggleDrawer']),
    ...mapActions(['handleLogOut']),
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
      } else {
        this.responsive = false
      }
    },
    logOut () {
      this.handleLogOut().then(() => {
        this.$router.push({
          name: 'login'
        })
      })
    },
    updatePass () {
      this.$router.push({
        name: 'updatePass'
      })
    }
  }
}
</script>
