<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      dark
    >
      <div class="d-flex align-center">
        <h1 style="color: black">De Dissel</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2" style="color: black">Login</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <deDisselLanding/>
    </v-main>
  </v-app>
</template>

<script>
import deDisselLanding from './components/deDisselLanding';

export default {
  name: 'App',

  components: {
    deDisselLanding,
  },

  data: () => ({
    
  }),
};
</script>
