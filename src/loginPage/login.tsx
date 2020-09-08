import React, {Component} from 'react';
import {sendLogin} from '../services/sendLogin';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {Navigation} from 'react-native-navigation';

const validatePassword = /(?=.{7,})(?=.*[0-9])(?=.*[a-z])|(?=.{7,})(?=.*[0-9])(?=.*[A-Z])/;
const validateEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

interface MainComponentState {
  email: string;
  password: string;
  isLoading: boolean;
}

interface MainComponentProps {
  props: any;
  navigation: any;
  componentId: any;
}

export default class Main extends Component<
  MainComponentProps,
  MainComponentState
> {
  constructor(props: MainComponentProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
    };
  }

  private login = async () => {
    this.setState({
      isLoading: true,
    });
    try {
      const result = await sendLogin(this.state.email, this.state.password);
      Navigation.push(this.props.componentId, {
        component: {
          name: 'UserList',
          passProps: {
            result: {result},
          },
        },
      });
    } catch (error) {
      Alert.alert(error.message);
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  private validateFields = () => {
    if (this.state.email === '' || this.state.password === '') {
      Alert.alert('Fill the entries with a valid format');
      return false;
    } else if (validateEmail.test(this.state.email) === true) {
      if (validatePassword.test(this.state.password) === true) {
        this.login();
      } else {
        Alert.alert('Valid e-mail, but invalid password');
      }
    } else {
      Alert.alert('Invalid e-mail.');
    }
    return true;
  };

  render() {
    const loading = this.state.isLoading;
    let button;
    if (loading) {
      button = (
        <View style={styles.button}>
          <ActivityIndicator size="large" color="#FFF" />
        </View>
      );
    } else {
      button = (
        <TouchableOpacity style={styles.button} onPress={this.validateFields}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      );
    }
    return (
      <>
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
          {button}
        </View>
      </>
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
    textAlign: 'center',
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
