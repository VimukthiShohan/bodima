import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CREATE_HOSTEL,
  HOSTEL_DETAILS,
  HOSTELS,
  SETTINGS,
} from '../constants/routeNames';
import Hostels from '../screens/Hostels';
import HostelDetails from '../screens/HostelDetails';
import createHostel from '../screens/createHostel';
import Settings from '../screens/Settings';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName={HOSTELS}>
      <HomeStack.Screen name={HOSTELS} component={Hostels} />
      <HomeStack.Screen name={HOSTEL_DETAILS} component={HostelDetails} />
      <HomeStack.Screen name={CREATE_HOSTEL} component={createHostel} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
