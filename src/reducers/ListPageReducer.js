export const listPageReducer = (state, action) => {
  switch (action.type) {
    case 'GET_LIST':
      return { ...state, listData: action.data };
    case 'GET_SINGLE':
      const selectedCat = state.listData.filter(el => el.id === action.id);
      return { ...state, selectedCat };
    default:
      return state;
  }
}