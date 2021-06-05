import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import {HOME_NAVIGATOR} from '../constants/routeNames';
import createHostel from '../screens/createHostel';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
      <Drawer.Screen name="Create hostel" component={createHostel} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
