import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
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
  const {data} = useQuery<queryResult, queryVariable>(userDetailQuery, {
    variables: {id: props.id},
  });

  return (
    <View style={styles.screen}>
      <View style={styles.profileImageView}>
        <Image
          source={require('./icons/profile.jpg')}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.infoView}>
        <Image source={require('./icons/userIcon.jpg')} style={styles.icon} />
        <Text style={styles.userInfo}>{data?.user.name}</Text>
      </View>
      <View style={styles.infoView}>
        <Image source={require('./icons/phoneIcon.jpg')} style={styles.icon} />
        <Text style={styles.userInfo}>{data?.user.phone}</Text>
      </View>
      <View style={styles.infoView}>
        <Image source={require('./icons/emailIcon.jpg')} style={styles.icon} />
        <Text style={styles.userInfo}>{data?.user.email}</Text>
      </View>
      <View style={styles.infoView}>
        <Image
          source={require('./icons/birthdateIcon.jpg')}
          style={styles.icon}
        />
        <Text style={styles.userInfo}>{data?.user.birthDate}</Text>
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
    flex: 1,
  },
  infoView: {flexDirection: 'row', margin: 20, marginTop: 60},
  profileImageView: {alignItems: 'center'},
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    marginTop: 20,
    marginLeft: 30,
  },
  icon: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    marginTop: 0,
    marginLeft: 0,
  },
  userInfo: {
    fontSize: 20,
    color: '#FFF',
    marginTop: 10,
    marginLeft: 20,
  },
  userBox: {
    width: 350,
    height: 400,
    borderColor: '#474748',
    borderRadius: 10,
    backgroundColor: '#2b2b2c',
  },
  infoTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#ECF0F1',
    lineHeight: 70,
    textAlign: 'center',
  },
  info: {color: '#999', fontSize: 14},
});

export default UserDetail;
