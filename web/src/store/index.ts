import { createStore } from "vuex";

interface State {
  userInfo: object;
}

export default createStore({
  state: <State>{
    userInfo: {}
  },
  mutations: {
    updateUserInfo(state: State, info: object) {
      state.userInfo = info;
    }
  }
});
