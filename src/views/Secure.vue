<template>
    <div id="app">
      <h1>this page is protected</h1>
      <button v-on:click="logout">logout</button>
      <button v-on:click="check">check</button>
    </div>
</template>
<script>
  export default {
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          console.log("logout success")
          this.$router.push('/')
        })
      },
      check() {
        console.log("this is token from store : " + this.$store.state.token)
        console.log(JSON.stringify(this.$store.state.user))
      }
    },
  }
</script>