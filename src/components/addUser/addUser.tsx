import React, {useRef, useState} from 'react';
import {Text, View, TextInput, Alert} from 'react-native';
import H1 from '../H1';
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
import FunctButton from '../button';
import Forms from '../form';

interface User {
  email: string;
  name: string;
  id: string;
  phone: string;
  birthDate: string;
}

const AddUser: NavigationFunctionComponent = (props) => {
  const name = useRef('');
  const email = useRef('');
  const password = useRef('');
  const birthDate = useRef('');
  const phone = useRef('');
  const role = useRef('user');
  const [errors, setErrors] = useState({
    phoneError: '',
    emailError: '',
    birthDateError: '',
    passwordError: '',
  });
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
      validatePhone(phone.current).boolean &&
      validateEmail(email.current).boolean &&
      validateDate(birthDate.current).boolean &&
      validatePassword(password.current).boolean
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
    } else {
      setErrors({
        phoneError: validatePhone(phone.current).error,
        emailError: validateEmail(email.current).error,
        birthDateError: validateDate(birthDate.current).error,
        passwordError: validatePassword(password.current).error,
      });
    }
  };

  return (
    <View style={styles.screen}>
      <H1 title={'Add User'} />
      <Forms
        label={'Full Name'}
        onChangeText={(val) => (name.current = val)}
        error={''}
      />
      <Forms
        label={'E-mail'}
        onChangeText={(val) => (email.current = val)}
        error={errors.emailError}
      />
      <Forms
        label={'Password (At least 7 digits, one number and one letter):'}
        onChangeText={(val) => (password.current = val)}
        error={errors.passwordError}
      />
      <Forms
        label={'Birthdate (yyyy-mm-dd)'}
        onChangeText={(val) => (birthDate.current = val)}
        error={errors.birthDateError}
      />
      <Forms
        label={'Phone Number (only numbers):'}
        onChangeText={(val) => (phone.current = val)}
        error={errors.phoneError}
      />
      <FunctButton
        loading={loading}
        onPress={() => validateFields()}
        title={'Cadastrar'}
      />
    </View>
  );
};

export default AddUser;
