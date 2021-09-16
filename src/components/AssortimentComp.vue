<template>
    <v-container>
        <h1 style="margin-top: 50px;">Ons Assortiment</h1>
        <v-content>
            <v-container fluid ma-0 pa-0 fill-height>
                <v-layout row>
                    <AssortimentCard/>
                    <AssortimentCard/>
                    <AssortimentCard/>
                    <AssortimentCard/>
                    <AssortimentCard/>
                    <AssortimentCard/>
                    <AssortimentCard/>
                    <AssortimentCard/>
                </v-layout>
            </v-container>
        </v-content>

    </v-container>
</template>

<script>
import AssortimentCard from '../components/layouts/AssortimentCard.vue'

export default {
    name: 'AssortimentComp',

    data: () => ({}),

    components: {
        AssortimentCard,
    }
}
</script>
