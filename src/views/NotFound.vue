<template>
  <div class="container not--found--container">
    <h1 class="display-2">Not Found</h1>
    <p class="display-1">
      Oops we coudn't found that page. Take me to
      <router-link :to="{ name: 'Home' }">Homepage</router-link>
    </p>
  </div>
</template>

<style scoped>
.not--found--container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>