/**
 * @format
 */

import React from 'react';
import {Navigation} from 'react-native-navigation';
import Main from './src/components/loginPage';
import UserList from './src/components/userList';
import AddUser from './src/components/addUser/addUser';
import {ApolloProvider} from '@apollo/client';
import {client} from './src/services/getUserList';

Navigation.registerComponent('Main', () => Main);
Navigation.registerComponent('UserList', () => UserList);
Navigation.registerComponent(
  'AddUser',
  () => (props) => (
    <ApolloProvider client={client}>
      <AddUser {...props} />
    </ApolloProvider>
  ),
  () => AddUser,
);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot(loginPage);
});

const loginPage = {
  root: {
    stack: {
      id: 'Main',
      children: [
        {
          component: {
            name: 'Main',
          },
        },
      ],
    },
  },
};

UserList.options = {
  topBar: {
    title: {
      text: 'UserList',
      color: '#D0D3D4',
    },
    background: {
      color: '#0d0d0f',
    },
  },
};

Main.options = {
  topBar: {
    title: {
      text: 'Login',
      color: '#D0D3D4',
    },
    background: {
      color: '#0d0d0f',
    },
  },
};

AddUser.options = {
  topBar: {
    title: {
      text: 'Sign Up',
      color: '#D0D3D4',
    },
    background: {
      color: '#0d0d0f',
    },
  },
};
