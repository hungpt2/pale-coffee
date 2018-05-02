<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6" sm="8">
          <b-card no-body class="mx-4">
            <b-card-body class="p-4">
              <h1>Register</h1>
              <p class="text-muted">Create your account</p>
              <b-input-group class="mb-3">
                <b-input-group-prepend>
                  <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                </b-input-group-prepend>
                <input type="text" class="form-control" placeholder="Username" v-model="user_name">
              </b-input-group>

              <b-input-group class="mb-3">
                <b-input-group-prepend>
                  <b-input-group-text>@</b-input-group-text>
                </b-input-group-prepend>
                <input type="text" class="form-control" placeholder="Email" v-model="email">
              </b-input-group>

              <b-input-group class="mb-3">
                <b-input-group-prepend>
                  <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                </b-input-group-prepend>
                <input type="password" class="form-control" placeholder="Password" v-model="password">
              </b-input-group>

              <b-input-group class="mb-4">
                <b-input-group-prepend>
                  <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                </b-input-group-prepend>
                <input type="password" class="form-control" placeholder="Repeat password" v-model="re_password">
              </b-input-group>

              <b-button variant="success" block @click="onRegister">Create Account</b-button>
            </b-card-body>
            <!-- <b-card-footer class="p-4">
              <b-row>
                <b-col cols="6">
                  <b-button block class="btn btn-facebook"><span>facebook</span></b-button>
                </b-col>
                <b-col cols="6">
                  <b-button block class="btn btn-twitter" type="button"><span>twitter</span></b-button>
                </b-col>
              </b-row>
            </b-card-footer> -->
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Account from '@/mixins/accounts'
import config from '@/config'

export default {
  name: 'Register',
  mixins: [Account],
  data () {
    return {
      user_name: '',
      email: '',
      password: '',
      re_password: ''
    }
  },
  methods: {
    onRegister () {
      if (this.password === this.re_password) {
        this.createUser(config.url_create_a_acc, {
          user_name: this.user_name,
          password: this.password,
          email: this.email
        }, (response) => {
          alert('Tạo thành công')
          this.$router.push('/dang-nhap')
        })
      } else {
        this.re_password = ''
        alert('2 Pass khác nhau')
      }
    }
  }
}
</script>
