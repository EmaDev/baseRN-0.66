import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigator from './Navigator';

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () =>  {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Navigator" component={Navigator} />
    </Tab.Navigator>
  );
}

export default BottomTabsNavigator;