<template>
  <v-container grid-list-xs>
    <h1 class="display-3 mb-4">Top Questions</h1>
    <hr class="mb-6" />
    <QuestionsList
      :questionsList="questionsList"
      :questionsListLoader="questionsListLoader"
    />
    <div class="load--more">
      <v-btn color="primary" @click="loadQuestions">Load Next Questions</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      page: 1,
      pagesize: 10,
    };
  },
  components: {
    QuestionsList: () => import("@/components/QuestionsListComponent"),
  },
  computed: {
    questionsList() {
      return this.$store.state.questionsList.items;
    },
    questionsListLoader() {
      return this.$store.state.questionsListLoader;
    },
  },
  mounted() {
    const params = { page: this.page, pagesize: this.pagesize };
    this.$store.dispatch("FetchQuestions", params);
  },
  methods: {
    loadQuestions() {
      this.page += 1;
      let params = { page: this.page, pagesize: this.pagesize };
      this.$store.dispatch("FetchQuestions", params);
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