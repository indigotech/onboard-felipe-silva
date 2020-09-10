import React, {useState, useEffect, useRef} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import {styles} from './styles';
import getUserList, {User} from '../../services/getUserList';

const UserList: React.FC = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const offset = useRef<number>(0);
  const [nextPage, setNextPage] = useState<boolean>(true);

  const addUserList = async () => {
    if (nextPage) {
      const queryUser = await getUserList(offset.current);
      setUserList([...userList, ...queryUser.users.nodes]);
      offset.current += 10;
      if (nextPage !== queryUser.users.pageInfo.hasNextPage) {
        setNextPage(queryUser.users.pageInfo.hasNextPage);
      }
    }
  };

  useEffect(() => {
    addUserList();
  }, []);

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
          </View>
        )}
        onEndReached={() => addUserList()}
        onEndReachedThreshold={1}
      />
    </SafeAreaView>
  );
};

export default UserList;
