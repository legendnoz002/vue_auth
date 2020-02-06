<template>
    <div id="app">
      <h1>this page is protected</h1>
      <button v-on:click="logout">logout</button>
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
      }
    },
  }
</script>