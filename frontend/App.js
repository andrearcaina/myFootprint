import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Beginning from './screens/GetStarted';
import Calendar from  './screens/Calendar';
import LoginPage from  './screens/LoginPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
          initialRouteName="Beginning"
          screenOptions={{
              headerShown: false,
              gestureEnabled: true,
              gestureDirection: 'horizontal',
          }}
        >
          <Stack.Screen name="GetStarted" component={Beginning} />
          <Stack.Screen name="Calendar" component={Calendar} />
          <Stack.Screen name="Login" component={LoginPage} />
          {/*<Stack.Screen name="CalculatorHome" component={Home.js} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
