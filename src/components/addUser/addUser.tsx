import React, {useRef} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import {
  validateDate,
  validateEmail,
  validatePassword,
  validatePhone,
} from '../../services/validateForms';
import {useMutation} from '@apollo/client';
import {
  CreateUserMutation,
  CreateUserVariables,
} from '../../services/createUser';

interface User {
  email: string;
  name: string;
  id: string;
}

const AddUser: NavigationFunctionComponent = (props) => {
  const name = useRef('');
  const email = useRef('');
  const password = useRef('');
  const birthDate = useRef('');
  const phone = useRef('');
  const role = useRef('user');
  const [mutate, {loading, error}] = useMutation<User, CreateUserVariables>(
    CreateUserMutation,
  );

  const validateFields = async () => {
    const userInfo = {
      name: name.current,
      email: email.current,
      password: password.current,
      birthDate: birthDate.current,
      phone: phone.current,
      role: role.current,
    };
    if (
      validatePhone(phone.current) &&
      validateEmail(email.current) &&
      validateDate(birthDate.current) &&
      validatePassword(password.current)
    ) {
      try {
        await mutate({
          variables: {
            data: userInfo,
          },
        });
        Navigation.push(props.componentId, {
          component: {
            name: 'UserList',
          },
        });
      } catch (e) {
        Alert.alert(error.message);
      }
    }
  };

  let button;
  if (loading) {
    button = (
      <View style={styles.button}>
        <ActivityIndicator size="large" color="#FFF" />
      </View>
    );
  } else {
    button = (
      <TouchableOpacity style={styles.button} onPress={() => validateFields()}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.screen}>
      <View style={styles.loginView}>
        <Text style={styles.textInput}>Full Name:</Text>
        <TextInput
          style={styles.loginInput}
          onChangeText={(val) => (name.current = val)}
        />

        <Text style={styles.textInput}>Email:</Text>
        <TextInput
          style={styles.loginInput}
          autoCapitalize="none"
          onChangeText={(val) => (email.current = val)}
        />

        <Text style={styles.textInput}>
          Password (At least 7 digits, one number and one letter):
        </Text>
        <TextInput
          style={styles.loginInput}
          onChangeText={(val) => (password.current = val)}
        />

        <Text style={styles.textInput}>Birthdate (yyyy-mm-dd):</Text>
        <TextInput
          style={styles.loginInput}
          onChangeText={(val) => (birthDate.current = val)}
        />

        <Text style={styles.textInput}>Phone Number (only numbers):</Text>
        <TextInput
          style={styles.loginInput}
          onChangeText={(val) => (phone.current = val)}
        />
      </View>
      <View style={styles.buttonView}>{button}</View>
    </View>
  );
};

export default AddUser;
