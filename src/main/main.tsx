import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

const validatePassword = /(?=.{7,})(?=.*[0-9])(?=.*[a-z])|(?=.{7,})(?=.*[0-9])(?=.*[A-Z])/;
const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  validateFields = () => {
    const {email, password} = this.state;
    if (email === '' || password === '') {
      Alert.alert('Fill the entries with a valid format');
      return false;
    } else if (validateEmail.test(this.state.email) === true) {
      if (validatePassword.test(this.state.password) === true) {
        Alert.alert('Valid password and e-mail');
      } else {
        Alert.alert('Valid e-mail, but invalid password');
      }
    } else {
      Alert.alert('Invalid e-mail.');
    }
    return true;
  };

  render() {
    return (
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Bem-vindo(a) à Taqtile!</Text>
        <View style={styles.loginTextInputsButton}>
          <Text style={styles.textInput}>E-mail</Text>
          <TextInput
            style={styles.loginInput}
            autoCapitalize="none"
            onChangeText={(val) => this.setState({email: val})}
          />
          <Text style={styles.textInput}>Senha</Text>
          <TextInput
            style={styles.loginInput}
            autoCapitalize="none"
            onChangeText={(senha) => this.setState({password: senha})}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.validateFields}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
    marginTop: 100,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 30,
  },
  loginTextInputsButton: {
    margin: 15,
  },
  textInput: {
    fontSize: 15,
    color: '#696969',
    marginTop: 20,
  },
  loginInput: {
    height: 40,
    width: 300,
    marginTop: 15,
    marginBottom: 15,
    borderColor: '#a9a9a9',
    borderWidth: 2,
    borderRadius: 20,
    textAlign: 'center',
  },
  button: {
    height: 40,
    width: 300,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#a9a9a9',
    alignItems: 'center',
    backgroundColor: '#a9a9a9',
  },
  buttonText: {
    color: '#f0f8ff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
