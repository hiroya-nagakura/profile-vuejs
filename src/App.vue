<template>
  <v-app
    
  >
    <AppHeader/>
    <Home/>
    <AppFooter/>
  </v-app>
</template>

<script>
  import AppHeader from './components/AppHeader.vue'
  import AppFooter from './components/AppFooter.vue'
  import Home from './components/Home.vue'

  export default {
    name: 'App',
    components: {
      AppHeader,
      AppFooter,
      Home
    }
  };
</script>

<style lang="scss" scoped>
  .v-application {
    background-color: rgb(233, 233, 233) !important;
  }
</style>
