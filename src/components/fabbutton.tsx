import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  SafeAreaView,
  GestureResponderEvent,
} from 'react-native';

interface FabbuttonProps {
  componentId: string;
  onPress: (event: GestureResponderEvent) => void;
}

const Fabbutton = (props: FabbuttonProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={props.onPress}>
        <Animated.View style={[styles.button, styles.menu]}>
          <Text style={styles.buttonText}>+</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ECF0F1',
  },
  container: {
    right: 60,
    bottom: 110,
    alignItems: 'center',
    position: 'absolute',
  },
  button: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 10,
    shadowColor: '#9466ff',
    shadowOpacity: 0.3,
    borderColor: '#FFF',
    borderWidth: 1,
  },
  menu: {
    backgroundColor: '#9466ff',
  },
});

export default Fabbutton;
