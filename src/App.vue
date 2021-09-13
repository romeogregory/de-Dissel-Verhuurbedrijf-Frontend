<template>
  <v-app>
    <v-app-bar
      app
      color="white" 
      dark
    >
      <router-link to="/" row>
        <v-img
          class="mx-2"
          src="../src/assets/logo.png"
          max-height="40"
          max-width="40"
          contain
        ></v-img>
        
        <!-- <v-toolbar-title class="ml-2" style="color:black;">de Dissel</v-toolbar-title> -->
      </router-link>

      <v-spacer></v-spacer>

      <v-btn color="primary">
          <v-icon left>mdi-account</v-icon>
          <router-link to="/login" style="color: white;">Account</router-link>
      </v-btn>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
