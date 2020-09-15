import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  GestureResponderEvent,
} from 'react-native';

interface SquareButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  loading: boolean;
  title: string;
}

const FunctButton: React.FC<SquareButtonProps> = (props) => {
  let button;
  if (props.loading) {
    button = (
      <View style={styles.button}>
        <ActivityIndicator size="large" color="#FFF" />
      </View>
    );
  } else {
    button = (
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </TouchableOpacity>
    );
  }
  return <View style={styles.buttonView}>{button}</View>;
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 300,
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFF',
    backgroundColor: '#9466ff',
  },
  buttonText: {
    color: '#f0f8ff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  buttonView: {
    margin: 15,
  },
});

export default FunctButton;
