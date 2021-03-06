import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedUser: null,
  },
  mutations: {
    loggedUserMutation(state, response) {
      state.loggedUser = response;
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
  },
});
