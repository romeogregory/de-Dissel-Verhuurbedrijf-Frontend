<template>
  <v-container>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                  <v-toolbar-title>Login form</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <p>Nog geen account? <router-link to="/register">Registreer nu</router-link></p>
                  <v-form>
                      <v-text-field
                        name="login"
                        label="Login"
                        type="text"
                        v-model="credentials.email"
                      ></v-text-field>
                      <v-text-field
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        v-model="credentials.password"
                      ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="login()">Login</v-btn>
                </v-card-actions>
            </v-card>
          </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    name: 'LoginComp',

    data(){
      return {
        credentials: {
          email: '',
          password: '',
        }
      }
    },

    methods: {
      login() {
        this.$store.dispatch('getToken', this.credentials, {
            //Nothing...
        }).then(response => {
            this.$router.push({ path: '/assortiment' });
            console.warn(response);
        });
      }
    }
  }
</script>
