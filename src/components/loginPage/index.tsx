import React, {Component} from 'react';
import {sendLogin} from '../../services/sendLogin';
import styles from './styles';
import {View, Text, TextInput, Alert} from 'react-native';
import {Navigation} from 'react-native-navigation';
import FunctButton from '../button';

const validatePassword = /(?=.{7,})(?=.*[0-9])(?=.*[a-z])|(?=.{7,})(?=.*[0-9])(?=.*[A-Z])/;
const validateEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

interface MainComponentState {
  email: string;
  password: string;
  isLoading: boolean;
}

interface MainComponentProps {
  componentId: string;
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
    this.setState({isLoading: true});
    try {
      await sendLogin(this.state.email, this.state.password);
      Navigation.push(this.props.componentId, {
        component: {
          name: 'UserList',
        },
      });
    } catch (error) {
      Alert.alert(error.message);
    } finally {
      this.setState({isLoading: false});
    }
  };

  private validateFields = () => {
    if (this.state.email === '' || this.state.password === '') {
      Alert.alert('Fill the entries with a valid format');
    }
    if (validateEmail.test(this.state.email)) {
      if (validatePassword.test(this.state.password)) {
        this.login();
      } else {
        Alert.alert('Valid e-mail, but invalid password');
      }
    } else {
      Alert.alert('Invalid e-mail.');
    }
  };

  render() {
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
          <FunctButton
            loading={this.state.isLoading}
            onPress={this.validateFields}
            title={'Login'}
          />
        </View>
      </>
    );
  }
}
