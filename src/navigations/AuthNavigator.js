import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LOGIN, REGISTER} from '../constants/routeNames';
import Login from '../screens/Login';
import Register from '../screens/Register';

const AuthNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={LOGIN} component={Login} />
      <HomeStack.Screen name={REGISTER} component={Register} />
    </HomeStack.Navigator>
  );
};

export default AuthNavigator;
