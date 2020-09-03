import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Bem-Vindo à Taqtile',
  };
  render() {
    return (
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Bem-vindo(a) à Taqtile!</Text>
        <View style={styles.loginTextInputsButton}>
          <Text style={styles.textInput}>E-mail</Text>
          <TextInput style={styles.loginInput} />
          <Text style={styles.textInput}>Senha</Text>
          <TextInput style={styles.loginInput} />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
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
