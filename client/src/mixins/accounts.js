module.exports = {
  methods: {
    createUser (url, params, callback) {
      this.$http.post(url, params).then(response => {
        if (callback) {
          callback(response)
        }
      }).catch((error) => {
        if (callback) {
          callback(error)
        }
      })
    },
    login (url, params, callback) {
      this.$http.post(url, params).then(response => {
        if (callback) {
          callback(response)
        }
      }).catch(() => {
        if (callback) {
          callback()
        }
      })
    }
  }
}
