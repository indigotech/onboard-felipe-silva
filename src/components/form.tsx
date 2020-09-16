import React, {useRef} from 'react';
import styled from 'styled-components/native';

interface FormsProps {
  label: string;
  onChangeText: (text: string, valid: boolean) => void;
  inputValidation: (val: string) => {boolean: boolean; errorMessage: string};
  startValidation: boolean;
}

const Forms: React.FC<FormsProps> = (props) => {
  const value = useRef('');
  const error = useRef({boolean: true, errorMessage: ''});

  if (props.startValidation) {
    error.current = {
      boolean: props.inputValidation(value.current).boolean,
      errorMessage: props.inputValidation(value.current).errorMessage,
    };
  }

  const handleValidation = (input: string) => {
    if (props.startValidation) {
      error.current = {
        boolean: props.inputValidation(value.current).boolean,
        errorMessage: props.inputValidation(value.current).errorMessage,
      };
    }
    props.onChangeText(input, props.inputValidation(input).boolean);
    value.current = input;
  };

  return (
    <StyledFormView>
      <StyledLabel fontColor={error.current.boolean ? '#b2babb' : '#cb2c2a'}>
        {props.label}
      </StyledLabel>
      <StyledTextField
        onChangeText={(input) => handleValidation(input)}
        autoCapitalize="none"
        backgroundColor={error.current.boolean ? '#515A5A' : '#d94745'}
      />
      {!error.current.boolean && <Error>{error.current.errorMessage}</Error>}
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
