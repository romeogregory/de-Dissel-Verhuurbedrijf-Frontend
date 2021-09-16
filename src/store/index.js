import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
        token: localStorage.getItem('token') || null,
  },

  getters: {
    token(state) {
        return state.token;
    },

    loggedIn(state) {
        return state.token !== null;
    }
  },

  mutations: {
    SET_TOKEN(state, token) {
        state.token = token;
    },

    retrieveToken(state, token){
        state.token = token;
    }
  },

  actions: {
    destroyToken(context) {
        if(context.getters.loggedIn) {
            return new Promise((resolve, reject) => {
                axios.post('http://127.0.0.1:80/api/v1/logout') //Check
                .then(response => {
                    localStorage.removeItem('token');
                    context.commit('destroyToken');
                    resolve(response);
                }).catch(err => {
                    localStorage.removeItem('token');
                    context.commit('destroyToken');
                    reject(err);
                })
            })
        }
    },

    getToken(context,credentials) {
        console.log(credentials.email);
        console.log(credentials.password);

        let parms = {
            email: credentials.email,
            password: credentials.password
        }
        
        return new Promise((resolve, reject) => {
            axios.post('http://127.0.0.1:80/api/v1/login', parms)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                context.commit('retrieveToken', response.data.token);
                resolve(response);
            }).catch(err => {
                reject(err);
            })
        })
    }
  },
})
