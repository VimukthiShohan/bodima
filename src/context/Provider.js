import React, {createContext, useReducer} from 'react';
import auth from './reducers/auth';
import authInitialState from './initialStates/authInitialState';
import hostel from './reducers/hostel';
import hostelInitialState from './initialStates/hostelInitialState';
import authLoginReducer, {loginInitialState} from './reducers/login';

export const GlobalContext = createContext({});
export const LoginContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [hostelState, hostelDispatch] = useReducer(hostel, hostelInitialState);
  const [loginState, loginDispatch] = useReducer(
    authLoginReducer,
    loginInitialState,
  );
  return (
    <GlobalContext.Provider
      value={{authState, hostelState, authDispatch, hostelDispatch}}>
      <LoginContext.Provider value={{loginState, loginDispatch}}>
        {children}
      </LoginContext.Provider>
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
