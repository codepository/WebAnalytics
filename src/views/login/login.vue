<template>
  <v-app>
    <LoginForm
      @on-success="handleSubmit"
      @on-registry="handleRegistry"
      @on-findPass="findPass"/>
  </v-app>
</template>
<script>
import LoginForm from '@/views/login/login-form'
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  components: {
    LoginForm
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    handleSubmit ({ userName, password }) {
      // console.log({ userName, password })
      this.handleLogin({ userName, password }).then(res => {
        this.getUserInfo().then(res => {
          this.$router.push({
            path: '/home'
          })
        })
      })
    },
    handleRegistry () {
      // console.log('注册')
      this.$router.push({
        name: 'registry'
      })
    },
    findPass () {
      console.log('找回密码')
      this.$router.push({
        name: 'findPass'
      })
    }
  }
}
</script>
