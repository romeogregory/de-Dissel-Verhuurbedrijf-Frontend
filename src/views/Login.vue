<template>
   <v-app id="inspire">
      <v-content>
         <v-container fluid fill-height>
            <v-layout  justify-center>
               <v-flex xs14 sm10 md6>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Login </v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                       <v-text>U kunt hier inloggen, heeft u nog geen account dan kunt u hier <router-link to="/">registreren</router-link></v-text>
                        <v-form>
                           <v-text-field
                              name="login"
                              label="Login"
                              type="text"
                           ></v-text-field>
                           <v-text-field
                              id="password"
                              name="password"
                              label="Password"
                              type="password"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                       <v-btn color="" to="/">Wactwoord vergeten?</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" to="/">Login</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-content>
   </v-app>
</template>

<script>


export default {
   name: 'Login',
   props: {
      source: String,
   },
   components: {
    },
};
</script>

<style></style>
