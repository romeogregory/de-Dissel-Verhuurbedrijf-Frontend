import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
        token: null,
  },

  getters: {
    token(state) {
        return state.token;
    }
  },

  mutations: {
    SET_TOKEN(state, token) {
        state.token = token;
    }
  },

  actions: {
    getToken({commit}, credentials) {
        console.log(credentials.email);
        console.log(credentials.password);

        let parms = {
            email: credentials.email,
            password: credentials.password
        }
        
        return new Promise((resolve, reject) => {
            axios.post('http://127.0.0.1:80/api/v1/login', parms)
            .then(response => {
                commit('SET_TOKEN', response.data.token);
                console.log(response.data.token);
                resolve();
            }).catch(err => {
                reject(err);
            })
        })
    }
  },
})
