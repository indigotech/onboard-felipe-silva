import React, {useState, useEffect, useRef} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import {styles} from './styles';
import getUserList from '../../services/getUserList';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  birthdate: string;
}

const UserList: React.FC = () => {
  const [userList, setUserList] = useState([]);
  const offset = useRef(0);

  const addUserList = async () => {
    const queryUser = await getUserList(offset.current);
    offset.current += 10;
    try {
      if (queryUser.length !== 0) {
        setUserList([...userList, ...queryUser]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    addUserList();
  }, []);

  let screen = (
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
  );
  return <SafeAreaView style={styles.screen}>{screen}</SafeAreaView>;
};

export default UserList;
