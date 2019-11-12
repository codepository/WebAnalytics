<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-center
      wrap>
      <v-flex
        xs12
        sm6
        md6
        lg3>
        <material-card
          color="green"
          title="登陆"
          text="login">
          <v-form
            ref="form"
            @keydown.enter.native="handleSubmit">
            <v-flex>
              <v-text-field
                v-model="form.userName"
                :rules="[v => !!v || '手机号不能为空']"
                label="手机号"
                required/>
            </v-flex>
            <v-flex>
              <v-text-field
                v-model="form.password"
                :rules="[v => !!v || '密码不能为空']"
                type="password"
                label="密码"
                required/>
            </v-flex>
            <v-flex>
              <v-layout justify-center>
                <material-button
                  color="success"
                  @click="handleSubmit"
                >提 交</material-button>
                <v-btn
                  color="info"
                  @click="handleRegistry"
                >注 册</v-btn>
              </v-layout>
            </v-flex>
            <v-flex>
              <v-layout justify-center>
                <material-button
                  color="default"
                  @click="findPass"
                >找回密码</material-button>
              </v-layout>
            </v-flex>
          </v-form>
        </material-card>
      </v-flex>
      <!-- <v-flex></v-flex> -->
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'LoginForm',
  data: () => ({
    form: {
      userName: '',
      password: ''
    }
  }),
  methods: {
    handleSubmit () {
      if (this.$refs.form.validate()) {
        this.$emit('on-success', {
          userName: this.form.userName,
          password: this.form.password
        })
      }
    },
    findPass () {
      this.$emit('on-findPass')
    },
    clear () {
      this.$refs.form.reset()
    },
    handleRegistry () {
      this.$emit('on-registry')
    }
  }
}
</script>
