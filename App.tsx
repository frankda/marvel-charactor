import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';

export type RootStackParamList = {
  Home: undefined,
  Profile: { name: string }
}

const Stack = createStackNavigator<RootStackParamList>();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function App() {
  return (
    <NavigationContainer>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar />}
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

