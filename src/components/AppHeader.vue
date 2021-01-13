<template>
  <header>
    <v-app-bar
      app
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>
        MyPortfoioSite
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-item-group
        class='header-link'
      >
        <v-btn
          depressed
          v-for='(menuItem, index) in menuItems'
          :key='index'
          @click="$vuetify.goTo(menuItem.url)"
        >
          {{menuItem.name}}
        </v-btn>
      </v-item-group>
    </v-app-bar>
    <v-navigation-drawer
      v-model='drawer'
      fixed
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group>
          <v-list-item
            v-for='(menuItem, index) in menuItems'
            :key='index'
            :href='menuItem.url'
          >
            <v-list-item-title>{{menuItem.name}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
import constants from '../common/constants'

export default {
  name: 'AppHeader',
  data() {
    return {
      drawer: false,
      menuItems: constants.menuItems
    } 
  }
};
</script>

<style lang='scss' scoped>
  .v-toolbar__title{
    overflow: visible !important;
    margin-right: 50px !important;
  }
  .v-app-bar__nav-icon {
    @include display_pc {
      display: none !important;
    }
  }
  .header-link {
  display: none;
    @include display_pc {
      display: block !important;
    }
  }
</style>