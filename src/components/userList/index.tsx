import React, {Component} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import {styles} from './styles';
import userOffset from '../../services/renderUser';

interface UserListComponentProps {
  userList: User[];
}

interface UserListComponentState {
  userList: object;
}

interface User {
  id: string;
  name: string;
  email: string;
}

export default class UserList extends Component<
  UserListComponentProps,
  UserListComponentState
> {
  constructor(props: UserListComponentProps) {
    super(props);
    this.state = {
      userList: this.props.userList,
    };
  }
  render() {
    let screen;
    screen = (
      <FlatList
        data={this.state.userList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.userBox}>
            <Text style={styles.userName}>
              {item.id} - {item.name}
            </Text>
            <Text style={styles.userEmail}>{item.email}</Text>
          </View>
        )}
        onEndReached={async () => {
          const userList = await userOffset();
          this.setState({userList: [...this.state.userList, ...userList]});
        }}
        onEndReachedThreshold={0.5}
      />
    );

    return <SafeAreaView style={styles.screen}>{screen}</SafeAreaView>;
  }
}
