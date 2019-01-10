<template>
  <div id="logout"/>
</template>

<script>
  export default {
    mounted() {
      this.$toast.show('<h1 class="title">Logging out...</h1>').goAway(1000)
      this.$store.dispatch('auth/logout')
        .then(() => {
          this.$toast.show('<h1 class="title">Logged out successfully</h1>').goAway(2000)
          this.$router.replace('/');
        });
    }
  }
</script>