import {StyleSheet} from 'react-native';

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

export default styles;
