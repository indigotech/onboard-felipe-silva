import React, {useRef, useState} from 'react';
import {View, Alert} from 'react-native';
import {H1} from '../H1';
import styles from './styles';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import {
  validateDate,
  validateEmail,
  validatePassword,
  validatePhone,
  validateName,
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

const AddUser: NavigationFunctionComponent<{OnSubmit: boolean}> = (props) => {
  const name = useRef({value: '', valid: false});
  const email = useRef({value: '', valid: false});
  const password = useRef({value: '', valid: false});
  const birthDate = useRef({value: '', valid: false});
  const phone = useRef({value: '', valid: false});
  const role = useRef('user');
  const [onSubmit, setOnSubmit] = useState(false);
  const [mutate, {loading, error}] = useMutation<User, CreateUserVariables>(
    CreateUserMutation,
  );

  const handleButtonPress = async () => {
    setOnSubmit(true);
    const userInfo = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
      birthDate: birthDate.current.value,
      phone: phone.current.value,
      role: role.current,
    };
    if (
      phone.current.valid &&
      email.current.valid &&
      birthDate.current.valid &&
      password.current.valid
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

  return (
    <View style={styles.screen}>
      <H1>Add User</H1>
      <Forms
        startValidation={onSubmit}
        label={'Full Name'}
        onChangeText={(field) => (name.current = field)}
        inputValidation={validateName}
      />
      <Forms
        startValidation={onSubmit}
        label={'E-mail'}
        onChangeText={(field) => (email.current = field)}
        inputValidation={validateEmail}
      />
      <Forms
        startValidation={onSubmit}
        label={'Password (At least 7 digits, one number and one letter):'}
        onChangeText={(field) => (password.current = field)}
        inputValidation={validatePassword}
      />
      <Forms
        startValidation={onSubmit}
        label={'Birthdate (yyyy-mm-dd)'}
        onChangeText={(field) => (birthDate.current = field)}
        inputValidation={validateDate}
      />
      <Forms
        startValidation={onSubmit}
        label={'Phone Number (only numbers):'}
        onChangeText={(field) => (phone.current = field)}
        inputValidation={validatePhone}
      />
      <FunctButton
        loading={loading}
        onPress={handleButtonPress}
        title={'Cadastrar'}
      />
    </View>
  );
};

export default AddUser;
