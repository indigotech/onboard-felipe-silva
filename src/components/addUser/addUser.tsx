import React, {useRef} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';

interface AddUserProps {
  User: User;
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

  const validateDate = (val: {current: string}) => {
    const dateTester = /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/;
    const todayDate = new Date();
    const yearMonthDay = val.current.split('-');
    const birth = new Date(
      Number(yearMonthDay[0]),
      Number(yearMonthDay[1]) - 1,
      Number(yearMonthDay[2]),
    );
    if (dateTester.test(val.current) && birth <= todayDate) {
      return true;
    } else {
      return false;
    }
  };
  const validateEmail = (val: {current: string}) => {
    const emailTester = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (emailTester.test(val.current)) {
      return true;
    } else {
      return false;
    }
  };
  const validatePassword = (val: {current: string}) => {
    const passwordTester = /(?=.{7,})(?=.*[0-9])(?=.*[a-z])|(?=.{7,})(?=.*[0-9])(?=.*[A-Z])/;
    if (passwordTester.test(val.current)) {
      return true;
    } else {
      return false;
    }
  };
  const validatePhone = (val: {current: string}) => {
    const phoneTester = /^[0-9]*$/;
    if (phoneTester.test(val.current) && val.current.length === 9) {
      return true;
    } else {
      return false;
    }
  };

  const validateFields = () => {
    if (
      validatePhone(phone) &&
      validateEmail(email) &&
      validateDate(birthdate) &&
      validatePassword(password)
    ) {
      return true;
    } else {
      return false;
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
