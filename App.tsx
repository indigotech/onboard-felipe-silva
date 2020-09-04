import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Main from './src/main/main';
import {ApolloProvider} from '@apollo/client';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Main />
      </SafeAreaView>
    </>
  );
};

export default App;
