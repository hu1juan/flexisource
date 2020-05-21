export const listPageReducer = (state, action) => {
  switch (action.type) {
    case 'GET_LIST':
      return { ...state, listData: action.data };
    case 'SELECT_SINGLE':
      const selected = state.listData.filter(el => el.id === action.id);
      return { ...state, selected };
    default:
      return state;
  }
}