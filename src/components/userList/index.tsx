import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import getUserList, {User} from '../../services/getUserList';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import Fabbutton from '../fabbutton';

const UserList: NavigationFunctionComponent = (props) => {
  const [userList, setUserList] = useState<User[]>([]);
  const offset = useRef<number>(0);
  const nextPage = useRef<boolean>(true);

  const addUserList = async () => {
    if (nextPage.current) {
      const queryUser = (await getUserList(offset.current)).data;
      try {
        setUserList([...userList, ...queryUser.users.nodes]);
        offset.current += 10;
        nextPage.current = queryUser.users.pageInfo.hasNextPage;
      } catch (e) {
        console.warn(e);
      }
    }
  };

  useEffect(() => {
    addUserList();
  }, []);

  const handleFabPress = () => {
    Navigation.push(props.componentId, {
      component: {
        name: 'AddUser',
      },
    });
  };

  const handleDetailsPress = (id: string) => {
    Navigation.push(props.componentId, {
      component: {
        name: 'UserDetail',
        passProps: {id},
      },
    });
  };

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={userList}
        keyExtractor={(item: User) => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.userBox}>
            <Text style={styles.userName}>
              {item.id} - {item.name}
            </Text>
            <Text style={styles.userEmail}>{item.email}</Text>
            <TouchableOpacity
              style={styles.detailButton}
              onPress={() => handleDetailsPress(item.id)}>
              <Text style={styles.detailButtonText}>Details</Text>
            </TouchableOpacity>
          </View>
        )}
        onEndReached={() => addUserList()}
        onEndReachedThreshold={1}
      />
      <Fabbutton componentId={props.componentId} onPress={handleFabPress} />
    </SafeAreaView>
  );
};

export default UserList;
