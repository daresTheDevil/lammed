<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      floating
      app
    >
      <v-toolbar 
        dense
        light
        flat 
        color="blue">
        <v-slide-x-transition>
          <v-toolbar-title 
            v-if="mini" 
            class="font-weight-light body-1">
            MDE
          </v-toolbar-title>
          <v-toolbar-title
            v-if="!mini" 
            class="font-weight-bold subheading">
            MSIS
          </v-toolbar-title>
        </v-slide-x-transition>
      </v-toolbar>
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :to="item.to"
          :key="i"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      class="transparent"
      flat
      dark
      fixed
    >
      
      <v-toolbar-side-icon @click="mini = !mini" />
      <v-toolbar-title>
        <img
          src="/mde-logo-light.svg" 
          height="55" >
      </v-toolbar-title>
      

      <v-spacer />

      <v-menu offset-y>
        <v-btn
          slot="activator"
          flat 
          class="text-capitalize">
          Public Data
          <v-icon>keyboard_arrow_down</v-icon>
        </v-btn>
        <v-list dense>
          <v-list-tile>
            <v-list-tile-avatar>
              <v-icon>school</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title class="subheading">Mississippi Succeeds Report Cards</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-avatar>
              <v-icon>insert_chart</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title class="subheading">MDE<span class="font-weight-bold">Open</span> Data Explorer</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-avatar>
              <v-icon>home</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title class="subheading">MDE<span class="font-weight-bold">Open</span> Data APIs</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn 
        flat 
        class="text-capitalize">About MSIS</v-btn>
      <v-btn
        flat 
        class="text-capitalize">Documentation</v-btn>
      <v-btn
        v-if="!isAuthenticated"
        flat 
        class="text-capitalize"
        to="/auth/login">User Login</v-btn>
        
      
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  data() {
    return {
      drawer: false,
      mini: false,
      items: [
        { icon: 'apps', title: 'Welcome', to: '/' },
        { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
      ],
      title: 'Vuetify.js'
    }
  },
  computed: {
    ...mapGetters({isAuthenticated: 'auth/isAuthenticated'}),
    ...mapState('auth', {user: state => state.user})
  }

}
</script>

<style>

</style>
