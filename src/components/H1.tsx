import React from 'react';
import styled from 'styled-components/native';

interface H1Props {
  title: string;
}

const StyledView = styled.View``;

const StyledText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #d0d3d4;
  margin: 20px;
`;

const H1: React.FC<H1Props> = (props) => {
  return (
    <StyledView>
      <StyledText>{props.title}</StyledText>
    </StyledView>
  );
};

export default H1;
