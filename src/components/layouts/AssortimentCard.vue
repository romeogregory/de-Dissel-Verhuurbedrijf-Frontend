<template>
    <v-card
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://meerbeek.nl/caravans/wp-content/uploads/Adria-caravan-Adora-2020-01.jpg"
    ></v-img>

    <v-card-title>Caravan1</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
      </v-row>

      <div class="my-4 text-subtitle-1"></div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Blah Blah</v-card-title>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
      >
        Huur
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'AssortimentCard',
    data: () => ({
      
    }),
  }
</script>
