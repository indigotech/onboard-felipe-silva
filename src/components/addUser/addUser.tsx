import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';

interface States {
  name: string;
  email: string;
  birthdate: string;
}

const AddUser: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [birthdate, setBirth] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const validateDate = () => {
    let date = new Date();
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    const today: string = dd + '/' + mm + '/' + yyyy;
    return today;
  };
  const validateEmail = (val: string) => {
    const emailTester = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (emailTester.test(val)) {
      return true;
    } else {
      return false;
    }
  };
  const validatePassword = (val: string) => {
    const passwordTester = /(?=.{7,})(?=.*[0-9])(?=.*[a-z])|(?=.{7,})(?=.*[0-9])(?=.*[A-Z])/;
    if (passwordTester.test(val)) {
      return true;
    } else {
      return false;
    }
  };
  const validatePhone = (val: string) => {
    const phoneTester = /(?=.{9,})(?=.*[0-9])(?=.*[a-z])|(?=.{7,})(?=.*[0-9])(?=.*[A-Z])/;
    if (phoneTester.test(val)) {
      return true;
    } else {
      return false;
    }
  };

  const validateFields = () => {
    if (
      validatePhone(phone) &&
      validateEmail(email) &&
      validateDate &&
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
          onChangeText={(val) => setName(val)}
        />
        <Text style={styles.textInput}>Email:</Text>
        <TextInput
          style={styles.loginInput}
          onChangeText={(val) => setEmail(val)}
        />
        <Text style={styles.textInput}>
          Password (must have 7 digits with at least one number and one letter):
        </Text>
        <TextInput
          style={styles.loginInput}
          onChangeText={(val) => setPassword(val)}
        />
        <Text style={styles.textInput}>Birthdate (dd/mm/aa):</Text>
        <TextInput
          style={styles.loginInput}
          onChangeText={(val) => setBirth(val)}
        />
        <Text style={styles.textInput}>Phone Number (only numbers):</Text>
        <TextInput
          style={styles.loginInput}
          onChangeText={(value) => setPhone(value)}
        />
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => validateEmail(email)}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddUser;
