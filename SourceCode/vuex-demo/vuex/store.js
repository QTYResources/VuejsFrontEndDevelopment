import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/logger'

Vue.use(Vuex)

const state = {
  items: [],
  name : ''
}

const mutations = { 
  ADD_ITEM (state, item) {
    state.items.push(item);
  },

  DELETE_ITEM (state) {
    state.items.pop();
  },

  SORT_ITEM(state, index, newIndex) {
    var origin = state.items.splice(index, 1)[0]
    state.items.splice(newIndex, 0, origin);
  },

  UPDATE_ITEM(state, index, data) {
    state.items.splice(index, 1, data);
  },

  UPDATE_CONTENT(state, index, value) {
    state.items.$set(index, { content : value });
  },

  UPDATE_NAME(state, value) {
    state.name = value;
  }

};

// middleware
const myMiddleware = {
  onInit(state) {
    console.log(state);
  },
  onMutation(mutation, state) {
    console.log(mutation, state);
  }
};

export default new Vuex.Store({
  strict : true,
  state,
  mutations,
  middlewares : [createLogger({
    collapsed : false,
    transformer(state) {
      return state;
    },
    mutationTransformer (mutation) {
      // mutations 会格式化为 { type, payload } 输出
      // 我们可以按照自己的需求格式化成任何我们想要的结构
      return mutation.type
    }
  })]
})