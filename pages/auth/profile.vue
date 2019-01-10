<template>
  <v-container 
    grid-list-xl>
    <v-layout 
      row 
      wrap
      justify-center>
      <v-flex shrink>
        <v-card 
          flat 
          color="transparent">
          <v-card-text class="text-xs-center py-2">
            <h1 class="headline">User Profile:</h1>
          </v-card-text>
          <v-divider />
          <v-card-text>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{ user.firstName }} {{ user.lastName }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ user.entityId }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-avatar>
                <img :src="user.avatar">
              </v-list-tile-avatar>
            </v-list-tile>
          </v-card-text>
          
          <v-card-text>
            <v-list class="transparent">
              <v-list-tile>
                <v-list-tile-avatar>
                  <v-icon large>account_circle</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>User ID:</v-list-tile-title>
                  <v-list-tile-sub-title>{{ user._id }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-avatar>
                  <v-icon large>contact_mail</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>Email:</v-list-tile-title>
                  <v-list-tile-sub-title>{{ user.email }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-avatar>
                  <v-icon large>domain</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>Entity ID:</v-list-tile-title>
                  <v-list-tile-sub-title>{{ user.entityId }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-avatar>
                  <v-icon large>person</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>Name:</v-list-tile-title>
                  <v-list-tile-sub-title>{{ user.firstName }} {{ user.lastName }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-avatar>
                  <v-icon large>folder_shared</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>Role:</v-list-tile-title>
                  <v-list-tile-sub-title>{{ user.roleId }}</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  middleware: 'authenticated',
  computed: {
    ...mapGetters({isAuthenticated: 'auth/isAuthenticated'}),
    ...mapState('auth', {user: state => state.user})
  },

}
</script>

<style>

</style>
