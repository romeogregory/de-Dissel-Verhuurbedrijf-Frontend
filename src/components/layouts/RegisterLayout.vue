<template>
  <v-container>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                  <v-toolbar-title>Register form</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <p>Al een account? <router-link to="/Login">Login</router-link></p>
                  <v-form>
                      <v-text-field
                        name="firstname"
                        label="Voornaam"
                        type="text"
                        v-model="credentials.firstname"
                      ></v-text-field>
                      <v-text-field
                        id="lastname"
                        name="lastname"
                        label="Achternaam"
                        type="text"
                        v-model="credentials.lastname"
                      ></v-text-field>
                      <v-text-field
                        id="insertion"
                        name="insertion"
                        label="Initialen"
                        type="text"
                        v-model="credentials.insertion"
                      ></v-text-field>
                      <v-text-field
                        id="mobile"
                        name="mobile"
                        label="Telefoon nummer"
                        type="tel"
                        v-model="credentials.mobile"
                      ></v-text-field>
                      <v-text-field
                        id="driving_license_category"
                        name="driving_license_category"
                        label="Rijbewijs license category"
                        type="text"
                        v-model="credentials.driving_license_category"
                      ></v-text-field>
                      <v-text-field
                        id="drivers_license_number"
                        name="drivers_license_number"
                        label="Rijbewijs licentienummer"
                        type="number"
                        v-model="credentials.drivers_license_number"
                      ></v-text-field>
                      <v-text-field
                        id="username"
                        name="username"
                        label="Gebruikersnaam"
                        type="text"
                        v-model="credentials.username"
                      ></v-text-field>
                      <v-text-field
                        id="email"
                        name="email"
                        label="Email"
                        type="email"
                        v-model="credentials.email"
                      ></v-text-field>
                      <v-text-field
                        id="password"
                        name="password"
                        label="Wachtwoord"
                        type="password"
                        v-model="credentials.password"
                      ></v-text-field><v-text-field
                        id="password_confirmation"
                        name="password_confirmation"
                        label="Herhaal wachtwoord"
                        type="password"
                        v-model="credentials.password_confirmation"
                      ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="register()">Registreer</v-btn>
                </v-card-actions>
            </v-card>
          </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    name: 'RegisterLayout',

    data(){
      return {
        credentials: {
          firstname: '',
          lastname: '',
          insertion: '',
          mobile: '',
          driving_license_category: '',
          drivers_license_number: '',
          username: '',
          email: '',
          password: '',
          password_confirmation: '',
        }
      }
    },

    methods: {
        register() {
            this.$store.dispatch('register', this.credentials, {
                //Nothing...
            }).then(response => {
                this.$router.push({ path: '/login' });
                console.warn(response);
            });
        }
    }
  }
</script>
