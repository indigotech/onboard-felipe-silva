import React, {Component} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import styles from './styles';

interface UserListComponentState {
  userList: any;
}

interface UserListComponentProps {
  props: any;
}
export default class UserList extends Component<
  UserListComponentState,
  UserListComponentProps
> {
  render() {
    let screen;
    if (this.props.userList) {
      const users = this.props.userList.result.data.users.nodes;
      console.log(users);

      screen = (
        <FlatList
          data={users}
          renderItem={({item}) => (
            <View style={styles.userBox}>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.userEmail}>{item.email}</Text>
            </View>
          )}
        />
      );
    } else {
      screen = <Text>Página</Text>;
    }
    return <SafeAreaView style={styles.screen}>{screen}</SafeAreaView>;
  }
}
