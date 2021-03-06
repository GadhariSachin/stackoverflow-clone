<template>
  <div>
    <UserProfile :userId="userId" />
    <UserTopTags :userId="userId" />
    <v-container grid-list-xs>
      <v-card>
        <v-card-title primary-title> Top Questions </v-card-title>
        <v-card-text>
          <QuestionsList
            :questionsList="userQuestionsList"
            :questionsListLoader="userQuestionsListLoader"
          />
          <div class="load--more">
            <v-btn color="primary" @click="loadQuestions"
              >Load Next Questions</v-btn
            >
          </div>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "UserProfileView",
  props: ["userId"],
  components: {
    UserProfile: () => import("@/components/UserProfileComponent"),
    UserTopTags: () => import("@/components/UserTopTagsComponent"),
    QuestionsList: () => import("@/components/QuestionsListComponent"),
  },
  data() {
    return {
      page: 1,
      pagesize: 10,
    };
  },
  computed: {
    userQuestionsList() {
      return this.$store.state.userQuestionsList.items;
    },
    userQuestionsListLoader() {
      return this.$store.state.userQuestionsListLoader;
    },
  },
  mounted() {
    const params = {
      userId: this.userId,
      page: this.page,
      pagesize: this.pagesize,
    };
    this.$store.dispatch("FetchUserTopQuestions", params);
  },
  methods: {
    loadQuestions() {
      this.page += 1;
      let params = {
        userId: this.userId,
        page: this.page,
        pagesize: this.pagesize,
      };
      this.$store.dispatch("FetchUserTopQuestions", params);
    },
  },
};
</script>

<style scoped>
.load--more {
  padding: 20px;
  display: flex;
  justify-content: center;
}
</style>