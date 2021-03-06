import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#1c1c1c',
    borderWidth: 1,
    borderTopColor: '#FFF',
    borderRadius: 5,
    alignItems: 'center',
    padding: 20,
    flex: 1,
  },
  userBox: {
    alignSelf: 'center',
    padding: 20,
    backgroundColor: '#2b2b2c',
    borderWidth: 1,
    borderColor: '#474748',
    width: 300,
    margin: 10,
    borderRadius: 20,
    alignItems: 'center',
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
  detailButton: {
    marginTop: 15,
    backgroundColor: '#9466ff',
    width: 70,
    height: 25,
    flex: 1,
    borderRadius: 5,
    justifyContent: 'center',
    borderColor: '#FFF',
    borderWidth: 1,
  },
  detailButtonText: {
    textAlign: 'center',
    color: '#ECF0F1',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export {styles};
