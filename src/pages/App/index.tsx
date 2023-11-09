import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import { Login } from '../Login';
import { Dashboard } from '../Dashboard';
import { RootStackParamList } from './types';
import { Signup } from '../SignUp';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Dashbord" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
    return (
        <AppStack/>
    )
}