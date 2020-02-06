<template>
    <div>
      <form class="login" @submit.prevent="login">
        <h1>Sign in</h1>
        <label>Email</label>
        <input
          required
          v-model="username"
          type="username"
          placeholder="username"
        />
        <label>Password</label>
        <input
          required
          v-model="password"
          type="password"
          placeholder="password"
        />
        <hr />
        <button type="submit">Login</button>
      </form>
      <button v-on:click="check">check</button>
    </div>
  </template>
  
  <script>
  /* eslint-disable */
  import { mapState } from "vuex";
  
  export default {
    data() {
      return {
        username: "",
        password: ""
      };
    },
    beforeCreate: function() {
      
    },
    computed: {},
    methods: {
      login() {
        let payload = {
          username: this.username,
          password: this.password
        };
        this.$store
          .dispatch("login", payload)
      },
      bing() {
        this.$store.dispatch("bing");
      },
      check() {
        console.log("this is token from local storage : " + localStorage.getItem('token'))
        console.log("this is token from store : " + this.$store.state.token)
        console.log("this is user from store : " + this.$store.state.user.body)
      }
    }
  };
  </script>
  
  <style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  