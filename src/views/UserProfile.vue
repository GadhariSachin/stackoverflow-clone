<template>
  <UserProfile :profileData="userId" />
</template>

<script>
export default {
  name: "UserProfileView",
  props: ["userId"],
  components: {
    UserProfile: () => import("@/components/UserProfileComponent"),
  },
};
</script>