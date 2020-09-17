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
  email: {value: string; valid: boolean};
  password: {value: string; valid: boolean};
  isLoading: boolean;
  onSubmit: boolean;
  teste: boolean;
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
      email: {value: '', valid: false},
      password: {value: '', valid: false},
      isLoading: false,
      onSubmit: false,
      teste: false,
    };
  }

  private login = async () => {
    this.setState({isLoading: true});
    try {
      await sendLogin(this.state.email.value, this.state.password.value);
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
    if (this.state.email.valid && this.state.password.valid) {
      this.login();
    }
  };

  private handleSubmit = () => {
    this.validateFields();
    this.setState({onSubmit: true});
  };

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <View style={styles.loginContainer}>
          <H1>Bem-vindo(a) à Taqtile!</H1>
          <View style={styles.loginTextInputsButton}>
            <Forms
              startValidation={this.state.onSubmit}
              label={'E-mail'}
              onChangeText={(field) => this.setState({email: field})}
              inputValidation={validateEmail}
            />
            <Forms
              startValidation={this.state.onSubmit}
              label={'Senha'}
              onChangeText={(field) => this.setState({password: field})}
              inputValidation={validatePassword}
            />
          </View>
          <FunctButton
            loading={this.state.isLoading}
            onPress={this.handleSubmit}
            title={'Login'}
          />
        </View>
      </>
    );
  }
}
