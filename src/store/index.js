/* eslint-disable */
import axios from 'axios';
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status : "",
    token : "",
    user : {},
    message : ""
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_error(state) {
      state.status = 'error'
    },
    auth_success(state , {token, user}) {
      state.status = 'successs';
      state.token = token;
      state.user = user
    },
    logout(state) {
      state.status = ''
      state.token = ""
      state.user = {}
    },
    bing(state,msg) {
      state.message = msg
      console.log(state.message)
    }
  },
  actions: {
    async login({commit}, {username , password}) {
        console.log(username + " <= this is payload username")
        console.log(password + " <= this is payload password")
        commit('auth_request')
        axios({ url: 'http://127.0.0.1:5000/mobile/login', data : {username:username,password:password}, method : 'POST' })
        .then(resp => {
          const payload = {
            token : resp.data.token,
            user : {
              username : username,
              password : password
            }
          }
          commit('auth_success', payload);
        })
    },
    logout({commit}) {
        commit('logout')
        delete axios.defaults.headers.common['Authorization']
    },
    bing({commit}) {
        axios({ url: 'http://127.0.0.1:5000/mobile/ping', method : 'GET'})
          .then(resp => {
            console.log(resp.data.message)
        })
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  }
});
