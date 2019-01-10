<template>
  <section class="deep-purple darken-3">
    <v-img
      src="/msis-landing.svg"
      aspect-ratio="1.77">
      <v-container
        grid-list-md
        fill-height>
        <v-layout 
          row 
          wrap
          fill-height
          align-center>
          <v-flex xs5>
            <v-card
              dark
              color="rgba(0, 0, 0, .2)">
              <v-card-text>
                <p class="display-2 font-weight-bold">Mississippi Student<br>Information System</p>
                <p class="headline font-weight-light">
                  Making Mississippi's education data available to teachers, parents, districts and schools.
                </p>
              </v-card-text>
              <v-divider class="mx-3"/>
              <v-card-text class="text-xs-center px-5">
                <p class="subheading font-weight-light">
                  MSIS and MDE<span class="font-weight-bold">Open</span> are MIT licensed, Open Source
                  projects build on VueJS, FeathersJS and MongoDB</p>
                <v-btn 
                  round 
                  depressed
                  large
                  color="light-blue darken-1">Learn More</v-btn>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      
    </v-img>
  </section>
</template>

<script>
export default {
  layout: 'msrc'

}
</script>

<style />
