import React, {useRef} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import {
  validateDate,
  validateEmail,
  validatePassword,
  validatePhone,
} from '../../services/validateForms';

interface AddUserProps {
  user: User;
}
interface User {
  phone: string;
  password: string;
  name: string;
  email: string;
  birthdate: string;
}

const AddUser: React.FC<AddUserProps> = () => {
  const name = useRef('');
  const email = useRef('');
  const password = useRef('');
  const birthdate = useRef('');
  const phone = useRef('');

  const validateFields = () => {
    if (
      validatePhone(phone.current) &&
      validateEmail(email.current) &&
      validateDate(birthdate.current) &&
      validatePassword(password.current)
    ) {
      console.log('sucess');
    } else {
      console.log('failed');
    }
  };

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
          onChangeText={(val) => (birthdate.current = val)}
        />

        <Text style={styles.textInput}>Phone Number (only numbers):</Text>
        <TextInput
          style={styles.loginInput}
          onChangeText={(val) => (phone.current = val)}
        />
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => validateFields()}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddUser;
