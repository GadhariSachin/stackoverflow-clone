<template>
  <v-app>
    <NavigationComponent />
    <v-main class="main--container">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavigationComponent from "@/components/Layout/NavigationComponent";

export default {
  name: "App",

  components: {
    NavigationComponent,
  },
};
</script>

<style scoped>
.main-container {
  background-color: #ededed;
}
</style>
