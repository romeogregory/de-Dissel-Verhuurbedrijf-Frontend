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
            </router-link>

            <v-spacer></v-spacer>

            <li v-if="!loggedIn">
                <router-link to="/login" style="color: white;">
                    <v-btn color="primary">Login
                        <v-icon right>mdi-account</v-icon>
                    </v-btn>
                </router-link>
            </li>
            <li v-if="loggedIn">
                <router-link to="/logout" style="color: white;">
                    <v-btn color="primary">Logout
                        <v-icon right>mdi-account</v-icon>
                    </v-btn>
                </router-link>
            </li>
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

    computed: {
        loggedIn() {
            return this.$store.getters.loggedIn;
        }
    }
};
</script>
