<template>
  <SignInFormComponent />
</template>

<script>
export default {
  name: "SignIn",
  components: {
    SignInFormComponent: () => import("@/components/SignInFormComponent"),
  },
};
</script>
