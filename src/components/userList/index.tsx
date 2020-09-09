import React, {Component} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import styles from './styles';

interface UserListComponentProps {
  userList: User[];
}

interface User {
  id: string;
  name: string;
  email: string;
}

export default class UserList extends Component<UserListComponentProps> {
  render() {
    let screen;
    if (this.props.userList) {
      const users = this.props.userList;

      screen = (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <View style={styles.userBox}>
              <Text style={styles.userName}>
                {item.id} - {item.name}
              </Text>
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
