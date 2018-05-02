<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <h1>Login</h1>
                <p class="text-muted">Sign In to your account</p>
                <b-input-group class="mb-3">
                  <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                  <input type="text" class="form-control" placeholder="Username" v-model="user_name">
                </b-input-group>
                <b-input-group class="mb-4">
                  <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                  <input type="password" class="form-control" placeholder="Password" v-model="password">
                </b-input-group>
                <b-row>
                  <b-col cols="6">
                    <b-button variant="primary" class="px-4" @click="onLogin">Login</b-button>
                  </b-col>
                  <b-col cols="6" class="text-right">
                    <b-button variant="link" class="px-0">Forgot password?</b-button>
                  </b-col>
                </b-row>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Account from '@/mixins/accounts'
import config from '@/config'

export default {
  name: 'Login',
  mixins: [Account],
  data () {
    return {
      user_name: '',
      password: ''
    }
  },
  methods: {
    onLogin () {
      console.log(this.user_name, this.email, this.password, this.re_password)
      if (this.password) {
        this.login(config.login_url, {
          user_name: this.user_name,
          password: this.password
        }, (response) => {
          console.log(response)
          if (!response) {
            alert('Sai tai khoan')
            this.user_name = ''
            this.password = ''
            return
          }
          if (response.data.code) {
            this.$router.push('/thong-ke')
          } else {
            alert('Sai pass')
          }
        })
      } else {
        this.re_password = ''
        alert('nhap pass')
      }
    }
  }
}
</script>
