import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useQuery} from '@apollo/client';
import {userDetailQuery} from '../services/getUserDetail';

interface queryResult {
  user: {
    name: string;
    email: string;
    id: string;
    birthDate: string;
    phone: string;
  };
}

interface queryVariable {
  id: string;
}

interface UserDetailProp {
  id: string;
}

const UserDetail: React.FC<UserDetailProp> = (props) => {
  const {loading, error, data} = useQuery<queryResult, queryVariable>(
    userDetailQuery,
    {
      variables: {id: props.id},
    },
  );

  return (
    <View style={styles.screen}>
      <View style={styles.userBox}>
        <Text>ID: #{data?.user.id}</Text>
        <Text>User: {data?.user.name}</Text>
        <Text>Email: {data?.user.email}</Text>
        <Text>Birthdate: {data?.user.birthDate}</Text>
        <Text>Phone: {data?.user.phone}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#1c1c1c',
    borderWidth: 1,
    borderTopColor: '#FFF',
    borderRadius: 5,
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },
  userBox: {
    width: 350,
    flex: 0.95,
    alignItems: 'center',
    borderColor: '#474748',
    borderRadius: 20,
    backgroundColor: '#2b2b2c',
  },
});

export default UserDetail;
