<template>
  <h1>This is user {{ profileData }}</h1>
</template>

<script>
export default {
  name: "UserProfileComponent",
  props: ["profileData"],
};
</script>