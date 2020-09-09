import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: '#1c1c1c',
    borderWidth: 1,
    borderTopColor: '#FFF',
    borderRadius: 5,
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },
  title: {
    margin: 50,
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 30,
    textAlign: 'center',
    color: '#D0D3D4',
  },
  loginTextInputsButton: {
    margin: 15,
  },
  textInput: {
    fontSize: 15,
    marginTop: 20,
    color: '#B2BABB',
  },
  loginInput: {
    height: 40,
    width: 300,
    marginTop: 15,
    marginBottom: 15,
    borderColor: '#a9a9a9',
    borderWidth: 2,
    color: '#FFF',
    borderRadius: 5,
    textAlign: 'center',
    backgroundColor: '#515A5A',
  },
  button: {
    height: 50,
    width: 300,
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFF',
    alignItems: 'center',
    backgroundColor: '#9466ff',
  },
  buttonText: {
    color: '#f0f8ff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default styles;
