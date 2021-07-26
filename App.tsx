import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import HomeScreen, { IHero } from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';

// params for each screen
export type RootStackParamList = {
  Home: undefined,
  Profile: IHero
}

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle='dark-content' />}
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                  name="Home"
                  component={HomeScreen}
              />
              <Stack.Screen 
                  name="Profile"
                  component={ProfileScreen}
              />
            </Stack.Navigator>
        </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});