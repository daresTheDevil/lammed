<template>
  <v-app class="grey lighten-3">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      width="230"
      floating
      fixed
      app
    >
      <v-toolbar
        dark
        flat 
        color="indigo">
        <v-spacer />
        <v-slide-x-transition>
          <span
            v-if="!mini" 
            class="text-xs-center">
            <img 
              src="/mde-logo-light.svg" 
              height="55">
              <!-- <v-list-tile-title class="text-xs-center">
              MSIS
            </v-list-tile-title>
            <v-list-tile-sub-title class="text-xs-center">
              Dashboard
            </v-list-tile-sub-title> -->
          </span>
        </v-slide-x-transition>
        <v-spacer />
      </v-toolbar>
      <v-card-text 
        
        class="text-xs-center pb-2">
        <v-avatar 
          
          size="96"><v-img :src="user.avatar" />
        </v-avatar>
      </v-card-text>
      <v-card-text 
        class="pt-0 text-xs-center">
        <h1 class="subheading">{{ user.firstName }} {{ user.lastName }}</h1>
        <h1 class="caption grey--text text--darken-1">{{ user.email }}</h1>
        
      
      </v-card-text>
      <v-divider />
      <v-list 
        dense 
        class="pt-0">
        <v-list-tile to="/dashboard">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-subheader>Procurement</v-subheader>
        <v-list-tile
          v-for="(item, i) in procurementItems"
          :to="item.to"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon
              v-html="item.icon" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        
        </v-list-tile>
        <v-subheader>Textbooks:</v-subheader>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>book</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Request</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>loop</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Transfer</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="white"
      flat
      fixed
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-text-field 
        prepend-inner-icon="search" 
        placeholder="Search" 
        solo
        light
        background-color="indigo lighten-5"
        flat
        class="pt-2" />
      <v-spacer />
      <v-btn 
        icon
        flat>
        <v-icon medium>notifications</v-icon>
      </v-btn>
      <v-btn 
        icon 
        large
        flat>
        <v-icon medium>forum</v-icon>
      </v-btn>
      <v-menu
        offset-y>
        <v-chip 
          slot="activator" 
          disabled
          color="grey lighten-2">
          <v-avatar>
            <img :src="user.avatar">
          </v-avatar>
          <v-icon 
            medium 
            color="indigo">keyboard_arrow_down</v-icon>
        </v-chip>
        <v-list 
          dense
          class="py-0">
          <v-list-tile 
            avatar 
            to="/auth/profile">
            <v-list-tile-avatar>
              <v-icon>fa-user</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title class="subheading">
                Profile
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile 
            avatar
            dark
            class="red"
            to="/auth/logout">
            <v-list-tile-avatar>
              <v-icon>lock_open</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title class="subheading white--text">
                Logout
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  middleware: 'authenticated',
  data() {
    return {
      drawer: true,
      mini: false,
      procurementItems: [
        { icon: 'bubble_chart', title: 'Submissions', to: '/' }
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
