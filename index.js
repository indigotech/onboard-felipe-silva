/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import Main from './src/loginPage/login';
import UserList from './src/pages/userList';

Navigation.registerComponent('Main', () => Main);
Navigation.registerComponent('UserList', () => UserList);
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
    },
  },
};

Main.options = {
  topBar: {
    title: {
      text: 'Login',
    },
  },
};
