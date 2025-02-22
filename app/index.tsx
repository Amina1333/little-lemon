import React from 'react';
import Onboarding from './screens/Onboarding';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Index() {
 
  return (
    <Onboarding/>
  );
}