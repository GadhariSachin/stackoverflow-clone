<template>
  <v-app-bar app dark>
    <v-toolbar-title class="logo">
      <router-link to="/">
        <span>stack<strong>overflow</strong></span>
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-if="!isUserLoggedIn" :to="{ name: 'Signin' }" text>
        Sign In
      </v-btn>
      <v-btn v-else @click="logoutUser" text> Sign Out </v-btn>
    </v-toolbar-items>
    <v-menu offset-y class="hidden-md-and-up" v-if="$vuetify.breakpoint.xsOnly">
      <template v-slot:activator="{ on, attrs }">
        <v-app-bar-nav-icon v-bind="attrs" v-on="on"> </v-app-bar-nav-icon>
      </template>
      <v-list>
        <v-list-item v-if="!isUserLoggedIn">
          <v-list-item-content>
            <v-list-item-title>
              <router-link :to="{ name: 'Signin' }" class="text-dark">
                Sign In
              </router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-else>
          <v-list-item-content>
            <v-list-item-title @click="logoutUser">
              Sign Out
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavigationComponent",
  computed: {
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    },
  },
  methods: {
    logoutUser() {
      this.$store.dispatch("LogoutUser");
    },
  },
};
</script>


<style scoped>
.logo {
  font-size: 2rem;
}
.logo span {
  font-weight: 200;
}
.router-link-active {
  color: white;
  text-decoration: none;
}
.text-dark {
  color: black;
  text-decoration: none;
}
</style>
