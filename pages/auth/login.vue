<template>
  <v-container
    grid-list-md 
    fill-height>
    <v-layout
      justify-center 
      align-center
      fill-height>
      <v-flex>
        <v-dialog
          v-model="dialog"
          :fullscreen="$vuetify.breakpoint.smAndDown"
          persistent
          width="350"
        >
          <v-card
            flat>
            <v-card-title>
              
              <v-btn
                flat 
                icon
                to="/"
                @click="dialog = false"><v-icon>close</v-icon></v-btn>
              <h1 class="headline">MSIS Login</h1>
              
              
            </v-card-title>
            

            <v-card-title class="justify-space-around">
              <v-spacer />
              <v-btn
                depressed
                large
                disabled
                color="black" 
                icon><v-icon>fab fa-github-alt</v-icon></v-btn>
              <v-btn 
                depressed 
                large
                dark 
                color="deep-orange" 
                icon
                @click="adminLogin"><v-icon>fab fa-google</v-icon></v-btn>
              <v-btn 
                depressed 
                large 
                dark
                color="blue" 
                icon
                @click="userLogin"><v-icon>fab fa-windows</v-icon></v-btn>
              <v-spacer />
            </v-card-title>
            <v-card-title>
              <v-divider />
              <h1 class="title mx-3">OR</h1>
              <v-divider />
            </v-card-title>

            <v-card-text class="text-xs-center">
              <v-text-field 
                v-model="email" 
                label="Email" 
                outline
                autofocus 
                type="text"/>
              <v-text-field
                v-model="password"
                :append-icon="showPassword ? 'visibility_off' : 'visibility'"
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                outline
                @click:append="showPassword = !showPassword"
                @keydown.enter="login"
              />
              <v-btn
                large 
                color="primary"
                round
                block
                depressed 
                @click="login">Login</v-btn>
            </v-card-text>

          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: "msrc",
  middleware: "anonymous",
  data() {
    return {
      email: "",
      password: "",
      dialog: true,
      showPassword: false
    };
  },
  methods: {
    adminLogin() {
      this.email = "Albin.Dach@example.org"
      this.password = "i4VWzuwAxLMQUUz"
      this.login();
    },
    userLogin() {
      this.email = "Randi.Hodkiewicz28@example.com"
      this.password = "srKPHqMgUieujSk"
      this.login();
    },
    login() {
      this.$toast.info('<h1 class="title">Logging in...</h1>').goAway(1000);
      this.$store
        .dispatch("auth/login", { email: this.email, password: this.password })
        .then(() => {
          this.$toast
            .success('<h1 class="title">Successfully authenticated</h1>')
            .goAway(2000);
          this.$router.replace("/dashboard");
        })
        .catch(error => {
          this.$toast.error(
            '<h1 class="title">Error while authenticating</h1>'
          );
          this.email = this.password = "";
        });
    }
  }
};
</script>

<style>
</style>
