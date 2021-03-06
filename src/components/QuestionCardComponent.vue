<template>
  <v-container>
    <v-row v-if="loading">
      <v-col cols="12" md="3">
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
          type="list-item-two-line"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row v-else>
      <div class="question--container">
        <div class="question--stats">
          <div class="votes">
            <p>{{ question.score }}</p>
            <span>votes</span>
          </div>
          <div class="answers">
            <p>{{ question.answer_count }}</p>
            <span>answers</span>
          </div>
          <div class="views">
            <p>{{ question.view_count }}</p>
            <span>views</span>
          </div>
        </div>
        <div class="question--details">
          <div class="question--title">
            <v-chip class="ma-2" label color="primary">
              {{ question.owner.reputation }}
            </v-chip>
            {{ question.title }}
          </div>
          <div class="question--tags">
            <div class="question--tags--container">
              <v-chip
                class="ma-1"
                label
                color="primary"
                v-for="(tag, index) in question.tags"
                :key="index"
              >
                {{ tag }}
              </v-chip>
            </div>
            <div class="question--author--details">
              <p>
                modified on
                {{ new Date(question.last_activity_date).toDateString() }} -
                <router-link
                  :to="{
                    name: 'UserProfile',
                    params: { userId: question.owner.user_id },
                  }"
                >
                  {{ question.owner.display_name }}
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="spacer"></div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "QuestionCardComponent",
  props: ["loading", "question"],
  data: () => ({
    attrs: {
      class: "mb-6",
      boilerplate: false,
      elevation: 2,
    },
  }),
};
</script>

<style scoped>
.actions--card {
  display: flex;
  justify-content: space-between;
  padding: 18px;
}
.question--container {
  display: flex;
  width: 100%;
  padding: 5px;
}
.question--stats {
  display: flex;
  flex: 0.2;
  flex-wrap: wrap;
  justify-content: space-between;
}
.votes {
  padding: 10px;
  text-align: center;
}
.votes span {
  color: grey;
}
.answers {
  outline: 1px solid green;
  text-align: center;
  padding: 10px;
}
.answers span {
  color: green;
}
.views {
  text-align: center;
  padding: 10px;
}
.views span {
  color: grey;
}
.question--details {
  display: flex;
  flex: 0.8;
  flex-direction: column;
  padding-left: 1em;
}
.question--tags {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.question--author--details p {
  margin-bottom: 0px;
  margin-top: 16px;
}
.spacer {
  border: 1px solid #dedede;
  width: 100%;
  margin: 10px 0px;
}
</style>