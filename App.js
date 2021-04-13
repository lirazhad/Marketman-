/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { navigationRef } from './src/navigation/rootNavigation';
import MainScreen from './src/components/mainScreen/mainScreen';
import SplashScreen from './src/components/splashScreen/splashScreen';
import UsersScreen from './src/components/usersScreen/usersScreen';
import { store } from './src/store/store';
import EditScreen from './src/components/editScreen/editScreen';

const Stack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator
    initialRouteName="Select a gender"
    screenOptions={{
      headerBackTitleVisible: false,
      gestureEnabled: false,
      ...TransitionPresets.ModalSlideFromBottomIOS
    }}>
    <MainStack.Screen
      name="Select a gender"
      options={{headerLeft: ()=> null}} 
      component={MainScreen}
    />
    <MainStack.Screen
      name="User List"
      component={UsersScreen} />
    <MainStack.Screen
      name="User details"
      component={EditScreen} />
  </MainStack.Navigator>
  );
}

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Provider store={store}>
          <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
              mode="modal"
              initialRouteName="Splash"
              headerMode="screen"
              screenOptions={{
                headerShown: false,
                gestureEnabled: false
              }}>
              <MainStack.Screen
                name="Splash"
                component={SplashScreen} />
              <MainStack.Screen
                name="MainStackScreen"
                component={MainStackScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  }
});

export default App;
