import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#1c1c1c',
    borderWidth: 1,
    borderTopColor: '#FFF',
    borderRadius: 5,
    padding: 20,
    flex: 1,
    alignItems: 'center',
  },
  titleView: {
    borderWidth: 1,
    width: 380,
    borderColor: '#1c1c1c',
    borderBottomColor: '#FFF',
  },
  textInput: {
    fontSize: 15,
    marginTop: 20,
    color: '#B2BABB',
  },
  loginView: {
    padding: 0,
    alignItems: 'center',
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
});

export default styles;
