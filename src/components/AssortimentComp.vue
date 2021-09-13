<template>
    <v-container>
        <h1>Ons Assortiment</h1>

        <v-row no-gutters>
            <v-col>
                <AssortimentCard/>
            </v-col>
            <v-col order="12">
                <AssortimentCard/>
            </v-col>
            <v-col order="1">
                <AssortimentCard/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import AssortimentCard from '../components/layouts/AssortimentCard.vue'

  export default {
    name: 'AssortimentComp',

    data: () => ({
      
    }),

    components: {
        AssortimentCard,
    }
  }
</script>
