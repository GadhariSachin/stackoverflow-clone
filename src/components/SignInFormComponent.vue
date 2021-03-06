<template>
  <v-card class="mx-auto mt-1 login-form" max-width="500">
    <v-card-title class="display-1 d-flex justify-center">Sign In</v-card-title>
    <v-card-text>
      <v-form ref="form" lazy-validation>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          prepend-icon="mdi-account"
          label="Email-ID"
          class="mb-3"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          prepend-icon="mdi-key"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="passwordRules"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          hint="At least 8 characters"
          counter
          @click:append="showPassword = !showPassword"
        ></v-text-field>
        <div class="d-flex justify-center">
          <v-btn class="mr-4 mb-3 mt-4" color="primary" @click="signin">
            Sign in
          </v-btn>
        </div>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "SignInFormComponent",
  data: () => ({
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    showPassword: false,
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) =>
        (v && v.length >= 6) || "Password must be at least 6 characters long",
    ],
  }),
  methods: {
    signin() {
      if (this.$refs.form.validate()) {
        let payload = { email: this.email, password: this.password };
        this.$store.dispatch("LoginUser", JSON.stringify(payload));
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>

<style scoped>
.login-form {
  top: 10vh;
}
</style>
