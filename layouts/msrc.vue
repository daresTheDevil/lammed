<template>
  <v-app class="grey lighten-3">
    <msrc-toolbar />
    <v-content class="pt-0">
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import MsrcToolbar from '@/components/toolbars/MsrcToolbar.vue'

export default {
  components: {
    MsrcToolbar
  },
  data() {
    return {
      
    }
  }
}
</script>
