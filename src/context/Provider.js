import React, {createContext, useReducer} from 'react';
import auth from './reducers/auth';
import authInitialState from './initialStates/authInitialState';
import hostel from './reducers/hostel';
import hostelInitialState from './initialStates/hostelInitialState';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [hostelState, hostelDispatch] = useReducer(hostel, hostelInitialState);
  return (
    <GlobalContext.Provider
      value={{authState, hostelState, authDispatch, hostelDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
