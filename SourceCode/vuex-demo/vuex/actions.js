export const addItem = ({ dispatch }, item) => {
  // dispatch('ADD_ITEM', type)
  dispatch('ADD_ITEM', item);
}

export const deleteItem = ({ dispatch }) => {
  dispatch('DELETE_ITEM')
}

export const sortItem = ({ dispatch }, index, newIndex) => {
  dispatch('SORT_ITEM', index, newIndex)
}

export const updateItem = ({ dispatch }, index, attr, value) => {
  dispatch('UPDATE_ITEM', index, attr, value)
}

export const updateContent = ({ dispatch }, index, value) => {
  dispatch('UPDATE_CONTENT', index, value)
}

export const updateName = ({ dispatch }, name) => {
	dispatch('UPDATE_NAME', name);
}