<template>
  <v-container grid-list-xs>
    <QuestionsList />
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {
    QuestionsList: () => import("@/components/QuestionsListComponent"),
  },
};
</script>
