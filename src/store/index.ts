// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {}
// });

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    flavor: "",
    total: 0
  },
  mutations: {
    change(state, flavor) {
      state.flavor = flavor;
    },
    savecount(state, count) {
      state.total = state.total + count;
    }
  },
  getters: {
    flavor: state => state.flavor,
    total: state => state.total
  }
});
