import React, { createContext, useReducer } from 'react';
import { listPageReducer } from '../reducers/ListPageReducer';

export const ListPageContext = createContext();

const ListPageContextProvider = (props) => {
  const initialState = { listData: [], selected: [] }
  const [listDataSource, dispatch] = useReducer(listPageReducer, initialState)

  return (
    <ListPageContext.Provider value={{ listDataSource, dispatch }}>
      {props.children}
    </ListPageContext.Provider>
  );
}

export default ListPageContextProvider;