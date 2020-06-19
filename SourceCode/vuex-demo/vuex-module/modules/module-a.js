import { MODULE_A } from './../mutation-types';

const state = {
	rootA : {
		name : 'a'
	}
};

const mutations = {
	[MODULE_A](state, param) {
		debugger;
		console.log(state);
	}
};

export default {
	state,
	mutations
}