import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import {GlobalContext} from '../context/Provider';

const AppNavContainer = () => {
  const {
    authState: {logged},
  } = useContext(GlobalContext);

  console.log('isLoggedIn :>>', logged);

  return (
    <NavigationContainer>
      {logged ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavContainer;
