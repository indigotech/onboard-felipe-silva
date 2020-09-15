import React from 'react';
import styled from 'styled-components/native';

interface FormsProps {
  label: string;
  onChangeText: (text: string) => void;
  error: string;
}

const Forms: React.FC<FormsProps> = (props) => {
  return (
    <StyledFormView>
      <StyledLabel fontColor={!props.error ? '#b2babb' : '#cb2c2a'}>
        {props.label}
      </StyledLabel>
      <StyledTextField
        onChangeText={props.onChangeText}
        autoCapitalize="none"
        backgroundColor={!props.error ? '#515A5A' : '#d94745'}
      />
      {props.error !== '' && <Error>{props.error}</Error>}
    </StyledFormView>
  );
};

const Error = styled.Text`
  font-size: 12px;
  font-weight: normal;
  color: #eb8258;
  margin-top: 8px;
`;

const StyledFormView = styled.View`
  margin: 15px;
  align-items: center;
`;

const StyledTextField = styled.TextInput<{backgroundColor: string}>`
  border-width: 2px;
  border-color: #a9a9a9;
  background-color: ${(props) => `${props.backgroundColor}`}
  height: 40px;
  border-radius: 5px;
  width: 300px;
  text-align: center;
  color: #fff;
`;

const StyledLabel = styled.Text<{fontColor: string}>`
  font-size: 12px;
  font-weight: normal;
  color: ${(props) => `${props.fontColor}`};
  margin-bottom: 12px;
`;

export default Forms;
