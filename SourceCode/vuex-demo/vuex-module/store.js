import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/logger'

import module_a from './modules/module-a';
import module_b from './modules/module-b';

Vue.use(Vuex);

export default new Vuex.Store({
	modules : {
		module_a,
		module_b
	},
	middlewares : [createLogger({
    collapsed : false,
    transformer(state) {
      return state;
    },
    mutationTransformer (mutation) {
      // mutations 会格式化为 { type, payload } 输出
      // 我们可以按照自己的需求格式化成任何我们想要的结构
      return mutation;
    }
  })]
});