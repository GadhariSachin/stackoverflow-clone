<template>
  <v-container grid-list-xs>
    <v-card v-if="userTagsListLoader">
      <v-card-title primary-title> Top Tags </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="3">
            <v-skeleton-loader
              v-bind="attrs"
              type="card-heading"
            ></v-skeleton-loader>
          </v-col>
          <v-col cols="12" md="8">
            <v-skeleton-loader
              v-bind="attrs"
              type="card-heading"
            ></v-skeleton-loader>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card v-else>
      <v-card-title primary-title> Top Tags </v-card-title>
      <v-card-text>
        <v-row v-for="tag in userTagsList" :key="tag.user_id">
          <v-col cols="12" md="3">
            <v-btn color="blue-grey lighten-1" outlined> {{ tag.name }} </v-btn>
          </v-col>
          <v-col cols="12" md="8">
            <p class="mb-0 user--tags--score">
              {{ tag.count }}
            </p>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <div class="load--more">
          <v-btn color="primary" @click="loadAllTags">Load All Tags</v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-container>
</template>


<script>
export default {
  name: "UserTopTagsComponent",
  props: ["userId"],
  data: () => ({
    attrs: {
      class: "mb-6",
      boilerplate: false,
      elevation: 2,
    },
  }),
  computed: {
    userTagsList() {
      return this.$store.state.userTagsList.items;
    },
    userTagsListLoader() {
      return this.$store.state.userTagsListLoader;
    },
  },
  mounted() {
    const options = {
      userId: this.userId,
      page: 1,
      pagesize: 5,
    };
    this.$store.dispatch("FetchUserTopTags", options);
  },
  methods: {
    loadAllTags() {
      let params = { userId: this.userId };
      this.$store.dispatch("FetchUserTopTags", params);
    },
  },
};
</script>

<style scoped>
.actions--card {
  display: flex;
  justify-content: space-between;
  padding: 18px;
}
.user--tags--score {
  font-size: 2em;
}
.load--more {
  padding: 20px;
  display: flex;
  justify-content: center;
}
</style>