import { createStore } from "vuex";

interface State {
  count: number;
  userInfo: object;
}

export default createStore({
  state(): State {
    return {
      count: 0,
      userInfo: {}
    };
  },
  mutations: {
    increment(state: State) {
      state.count++;
    },
    updateUserInfo(state: State, info) {
      state.userInfo = info;
    }
  }
});
