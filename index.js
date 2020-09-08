/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import Main from './src/components/loginPage';
import UserList from './src/components/userList';

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
