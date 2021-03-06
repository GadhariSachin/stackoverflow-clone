<template>
  <div>
    <QuestionCard
      v-for="question in questionsList"
      :loading="questionsListLoader"
      :question="question"
      :key="question.question_id"
    />
  </div>
</template>

<script>
export default {
  name: "QuestionsListComponent",
  props: ["questionsList", "questionsListLoader"],
  components: {
    QuestionCard: () => import("./QuestionCardComponent"),
  },
};
</script>