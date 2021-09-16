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
    },

    destroyToken(state) {
        state.token = null;
    }
  },

  actions: {
    register(context, credentials) {
        let parms = {
            firstname: credentials.firstname,
            lastname: credentials.lastname,
            insertion: credentials.insertion,
            mobile: credentials.mobile,
            driving_license_category: credentials.driving_license_category,
            drivers_license_number: credentials.drivers_license_number,
            username: credentials.username,
            email: credentials.email,
            password: credentials.password,
            password_confirmation: credentials.password_confirmation,
        }

        return new Promise((resolve, reject) => {
            axios.post('http://127.0.0.1:80/api/v1/register', parms)
            .then(response => {
                resolve(response);
            }).catch(err => {
                reject(err);
            })
        })
    },

    destroyToken(context) {
        if(context.getters.loggedIn) {
            return new Promise((resolve, reject) => {
                axios.post('http://127.0.0.1:80/api/v1/logout', )
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
        let parms = {
            email: credentials.email,
            password: credentials.password
        }
        
        return new Promise((resolve, reject) => {
            axios.post('http://127.0.0.1:80/api/v1/login', parms)
            .then(response => {
                localStorage.setItem('token', response.data.data.token);
                context.commit('retrieveToken', response.data.data.token);
                resolve(response);
            }).catch(err => {
                reject(err);
            })
        })
    }
  },
})
