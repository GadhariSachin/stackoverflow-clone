import Vue from "vue";
import Vuex from "vuex";
import APIEndpoints from "@/utils/index";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedUser: null,
    questionsList: {},
    questionsListLoader: false,
    userProfile: {},
    userProfileLoader: false,
    userQuestionsList: {},
    userQuestionsListLoader: false,
    userTagsList: {},
    userTagsListLoader: false,
  },
  mutations: {
    loggedUserMutation(state, response) {
      state.loggedUser = response;
    },
    questionsListMutation(state, response) {
      state.questionsList = response;
    },
    questionsListLoaderMutation(state, response) {
      state.questionsListLoader = response;
    },
    userProfileMutation(state, response) {
      state.userProfile = response;
    },
    userProfileLoaderMutation(state, response) {
      state.userProfileLoader = response;
    },
    userQuestionsListMutation(state, response) {
      state.userQuestionsList = response;
    },
    userQuestionsListLoaderMutation(state, response) {
      state.userQuestionsListLoader = response;
    },
    userTagsListMutation(state, response) {
      state.userTagsList = response;
    },
    userTagsListLoaderMutation(state, response) {
      state.userTagsListLoader = response;
    },
  },
  getters: {
    isUserLoggedIn(state) {
      let token = localStorage.getItem("token");
      if (token) {
        state.loggedUser = token;
      }
      return state.loggedUser;
    },
  },
  actions: {
    LoginUser(context, payload) {
      localStorage.setItem("token", payload);
      context.commit("loggedUserMutation", payload);
    },
    LogoutUser(context) {
      localStorage.removeItem("token");
      context.commit("loggedUserMutation", null);
    },
    FetchQuestions(context, options) {
      context.commit("questionsListLoaderMutation", true);
      let params = {};
      const { page, pagesize } = options;
      if (page) {
        params = Object.assign(params, {
          page: page,
        });
      }
      if (pagesize) {
        params = Object.assign(params, {
          pagesize: pagesize,
        });
      }
      axios
        .get(APIEndpoints.questionsList, { params })
        .then(function(response) {
          context.commit("questionsListMutation", response.data);
        })
        .catch(function(error) {
          console.log(error);
        })
        .then(function() {
          context.commit("questionsListLoaderMutation", false);
        });
    },
    FetchUserProfile(context, options) {
      context.commit("userProfileLoaderMutation", true);
      const { userId } = options;
      const params = {
        site: "stackoverflow",
      };
      axios
        .get(APIEndpoints.userProfile + userId, { params })
        .then(function(response) {
          context.commit("userProfileMutation", response.data);
        })
        .catch(function(error) {
          console.log(error);
        })
        .then(function() {
          context.commit("userProfileLoaderMutation", false);
        });
    },
    FetchUserTopQuestions(context, options) {
      context.commit("userQuestionsListLoaderMutation", true);
      let params = {
        site: "stackoverflow",
      };
      const { page, pagesize, userId } = options;
      if (page) {
        params = Object.assign(params, {
          page: page,
        });
      }
      if (pagesize) {
        params = Object.assign(params, {
          pagesize: pagesize,
        });
      }
      axios
        .get(APIEndpoints.userProfile + userId + "/questions", { params })
        .then(function(response) {
          context.commit("userQuestionsListMutation", response.data);
        })
        .catch(function(error) {
          console.log(error);
        })
        .then(function() {
          context.commit("userQuestionsListLoaderMutation", false);
        });
    },
    FetchUserTopTags(context, options) {
      context.commit("userTagsListLoaderMutation", true);
      let params = {
        site: "stackoverflow",
        order: "desc",
        sort: "popular",
      };

      const { page, pagesize, userId } = options;
      if (page) {
        params = Object.assign(params, {
          page: page,
        });
      }
      if (pagesize) {
        params = Object.assign(params, {
          pagesize: pagesize,
        });
      }
      axios
        .get(APIEndpoints.userProfile + userId + "/tags", { params })
        .then(function(response) {
          context.commit("userTagsListMutation", response.data);
        })
        .catch(function(error) {
          console.log(error);
        })
        .then(function() {
          context.commit("userTagsListLoaderMutation", false);
        });
    },
  },
});
