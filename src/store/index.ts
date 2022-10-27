import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      name: '',
      email: '',
    },
  },
  mutations: {
    updateUser: (state, userDetails) => {
      state.userInfo.name = userDetails.name;
      state.userInfo.email = userDetails.email;
    }
  },
  actions: {},
  modules: {}
});
