import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (!store.getters.loggedIn) {
        next({
          path: '/login',
        })
      } else {
        next()
      }
    } 
    // else if (to.matched.some(record => record.meta.requiresVisitor)) {
    //     // this route requires auth, check if logged in
    //     // if not, redirect to login page.
    //     if (!store.getters.loggedIn) {
    //       next({
    //         path: '/dashboard',
    //       })
    //     } else {
    //       next()
    //     }
    //   } 
      else {
            next() // make sure to always call next()!
    }
  })

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
