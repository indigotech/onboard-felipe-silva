import React, {Component} from 'react';
import {sendLogin} from '../../services/sendLogin';
import styles from './styles';
import {View, Alert, StatusBar} from 'react-native';
import {Navigation} from 'react-native-navigation';
import FunctButton from '../button';
import {H1} from '../H1';
import Forms from '../form';
import {validateEmail, validatePassword} from '../../services/validateForms';

interface MainComponentState {
  email: string;
  password: string;
  isLoading: boolean;
  emailError: string;
  passwordError: string;
  errors: {emailError: string; passwordError: string};
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
      emailError: '',
      passwordError: '',
      errors: {emailError: '', passwordError: ''},
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
    if (
      validateEmail(this.state.email).boolean &&
      validatePassword(this.state.password).boolean
    ) {
      this.login();
    } else {
      this.setState({
        errors: {
          emailError: validateEmail(this.state.email).error,
          passwordError: validatePassword(this.state.password).error,
        },
      });
    }
  };

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <View style={styles.loginContainer}>
          <H1>Bem-vindo(a) à Taqtile!</H1>
          <View style={styles.loginTextInputsButton}>
            <Forms
              label={'E-mail'}
              onChangeText={(email) => this.setState({email: email})}
              error={this.state.errors.emailError}
            />
            <Forms
              label={'Senha'}
              onChangeText={(senha) => this.setState({password: senha})}
              error={this.state.errors.passwordError}
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
