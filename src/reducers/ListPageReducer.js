export const listPageReducer = (state, action) => {
  switch (action.type) {
    case 'GET_LIST':
      return { ...state, listData: action.data };
    default:
      return state;
  }
}