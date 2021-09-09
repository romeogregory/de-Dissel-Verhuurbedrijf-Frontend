<template>
  <v-container>
    <div class="col-lg-8 col-lg-offset-2 centered">
      <div style="float: left; height: 50px;">
        <h1 class="display-2 font-weight-bold mb-3">
            De Dissel
          </h1>

          <p class="subheading font-weight-regular">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quae, odit, sapiente in reprehenderit, <br> 
            est dolorum veniam ipsum veritatis itaque mollitia libero dicta dolore. Obcaecati pariatur  <br> 
            dolor commodi, voluptates eveniet illo, cupiditate explicabo <br> 
            asperiores reprehenderit adipisci animi! Odit sunt blanditiis cupiditate? Perspiciatis <br> 
            odio magnam odit voluptatem in iusto amet eos illo laboriosam, <br> 
          </p>
      </div>
      <div style="float: right; width: 200px; height: 50px;">
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="300"
          max-width="500"
          src="https://picsum.photos/id/11/500/300"
        ></v-img>
      </div>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'deDisselLanding',

    data: () => ({
      
    }),
  }
</script>
