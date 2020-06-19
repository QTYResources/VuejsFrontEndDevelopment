import * as actions from './mutation-types';

export const updateModuleA = ({ dispatch }, param) => {
  dispatch(actions.MODULE_A, param);
  dispatch(actions.MODULE_B, param);
}

export const updateModuleB = ({ dispatch }, param) => {
  dispatch(actions.MODULE_B, param);
}
