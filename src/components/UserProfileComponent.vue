<template>
  <v-container grid-list-xs>
    <v-card v-if="userProfileLoader">
      <v-card-title primary-title> Profile </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="3">
            <v-skeleton-loader
              v-bind="attrs"
              type="card-avatar"
            ></v-skeleton-loader>
            <div
              class="actions--card v-skeleton-loader v-skeleton-loader--boilerplate v-skeleton-loader--is-loading theme--light elevation-2 mb-6"
            >
              <v-skeleton-loader type="button"></v-skeleton-loader>
              <v-skeleton-loader type="button"></v-skeleton-loader>
              <v-skeleton-loader type="button"></v-skeleton-loader>
            </div>
          </v-col>
          <v-col cols="12" md="8">
            <v-skeleton-loader
              v-bind="attrs"
              type="card-heading"
            ></v-skeleton-loader>
            <v-skeleton-loader
              v-bind="attrs"
              type="card-heading"
            ></v-skeleton-loader>
            <v-skeleton-loader
              v-bind="attrs"
              type="card-heading"
            ></v-skeleton-loader>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card v-else>
      <v-card-title primary-title> Profile </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="3">
            <v-card>
              <v-img
                :src="userProfile.profile_image"
                :lazy-src="userProfile.profile_image"
                aspect-ratio="1"
                class="grey lighten-2 profile--img"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <v-card-title class="title">
                <div class="user--reputations">
                  <p class="mb-0">
                    {{ userProfile.reputation }} &nbsp;
                    <span class="user--reputations--subtitle">REPUTATIONS</span>
                  </p>
                </div>
              </v-card-title>
            </v-card>

            <div class="actions--card mb-6">
              <v-btn color="warning" outlined>
                &bull; {{ userProfile.badge_counts.gold }}
              </v-btn>
              <v-btn color="blue-grey lighten-1" outlined>
                &bull; {{ userProfile.badge_counts.silver }}
              </v-btn>
              <v-btn color="brown lighten-1" outlined>
                &bull; {{ userProfile.badge_counts.bronze }}
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="8">
            <p class="profile--titles">
              <v-icon>mdi-account</v-icon>
              {{ userProfile.display_name }}
            </p>
            <p class="profile--titles">
              <v-icon> mdi-map-marker</v-icon>
              {{ userProfile.location || "Not available" }}
            </p>
            <p class="profile--titles">
              <v-icon> mdi-web</v-icon>
              {{ userProfile.website_url || "Not available" }}
            </p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "UserProfileComponent",
  props: ["userId"],
  data: () => ({
    attrs: {
      class: "mb-6",
      boilerplate: false,
      elevation: 2,
    },
  }),
  computed: {
    userProfile() {
      return this.$store.state.userProfile.items[0];
    },
    userProfileLoader() {
      return this.$store.state.userProfileLoader;
    },
  },
  mounted() {
    this.$store.dispatch("FetchUserProfile", { userId: this.userId });
  },
};
</script>

<style scoped>
.actions--card {
  display: flex;
  justify-content: space-between;
  padding: 18px;
}
.profile--img {
  object-fit: contain;
  width: 180px;
  margin: auto;
}
.user--reputations {
  display: flex;
  justify-content: center;
  width: 100%;
}
.user--reputations--subtitle {
  color: #adadad;
  font-size: 16px;
  vertical-align: middle;
}
.profile--titles {
  font-size: 2em;
  margin-bottom: 1em;
}
</style>