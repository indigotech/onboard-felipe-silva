import {View, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';

export default class Loading extends Component {
  render() {
    return (
      <View style={styles.spinner}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../services/img/Logo_Quadrado_Branco.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  image: {
    flex: 0.5,
  },
});
