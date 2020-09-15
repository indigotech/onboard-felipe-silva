import React from 'react';
import {View, ActivityIndicator, GestureResponderEvent} from 'react-native';
import styled from 'styled-components/native';

interface SquareButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  loading: boolean;
  title: string;
}

const FunctButton: React.FC<SquareButtonProps> = (props) => {
  let button;
  if (props.loading) {
    button = <ActivityIndicator size="large" color="#FFF" />;
  } else {
    button = <StyledText>{props.title}</StyledText>;
  }
  return (
    <View>
      <StyledTouchableOpacity onPress={props.onPress} disabled={props.loading}>
        {button}
      </StyledTouchableOpacity>
    </View>
  );
};

const StyledTouchableOpacity = styled.TouchableOpacity`
  background-color: #9466ff;
  width: 300px;
  height: 44px;
  border-radius: 5px;
  border-width: 1px;
  border-color: #fff;
  justify-content: center;
  margin-top: 20px;
`;

const StyledText = styled.Text`
  font-size: 16px;
  font-weight: normal;
  color: #f0f8ff;
  text-align: center;
`;

export default FunctButton;
