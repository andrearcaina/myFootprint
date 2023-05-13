import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from './screens/GetStarted';
import TrackCalendar from './screens/TrackCalendar';
import LoginPage from './screens/LoginPage';
import SignIn from './screens/SignIn';
import HomePage from './screens/HomePage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
      }}
      >
        {/*<Stack.Screen name="GetStarted" component={GetStarted} />}
        {<Stack.Screen name="TrackCalendar" component={TrackCalendar} />}
        {<Stack.Screen name="SignIn" component={SignIn} />*/}
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
