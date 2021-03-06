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
  },
});
