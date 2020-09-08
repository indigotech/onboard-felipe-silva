import React from 'react';
import {StatusBar} from 'react-native';
import Main from './src/loginPage/login';
import teste from './src/pages/afterlogin';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

declare const global: {HermesInternal: null | {}};

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Main} />
          <Stack.Screen name="afterLogin" component={teste} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
