import { MODULE_B } from './../mutation-types';

const state = {
	rootB : {
		name : 'b'
	}
};

const mutations = {
	[MODULE_B](state, param) {
		console.log(state);
	}
};

export default {
	state,
	mutations
}