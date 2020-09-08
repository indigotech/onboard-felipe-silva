import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#1C2833',
    flex: 1,
  },
  userBox: {
    alignSelf: 'center',
    padding: 20,
    backgroundColor: '#303b46',
    width: 300,
    margin: 10,
    borderRadius: 20,
  },
  userName: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#ECF0F1',
  },
  userEmail: {
    textAlign: 'center',
    color: '#999',
    fontSize: 16,
  },
});

export default styles;
