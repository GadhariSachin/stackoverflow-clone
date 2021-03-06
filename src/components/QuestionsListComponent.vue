<template>
  <div>
    <QuestionCard v-for="item in data" :key="item.id" />
  </div>
</template>

<script>
export default {
  name: "QuestionsListComponent",
  data() {
    return {
      data: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
        {
          id: 5,
        },
        {
          id: 6,
        },
      ],
    };
  },
  components: {
    QuestionCard: () => import("./QuestionCardComponent"),
  },
};
</script>