import React, {useRef, useState, useEffect} from 'react';
import styled from 'styled-components/native';

interface FormsProps {
  label: string;
  onChangeText: (info: {value: string; valid: boolean}) => void;
  inputValidation: (val: string) => {isValid: boolean; errorMessage: string};
  startValidation: boolean;
}

const Forms: React.FC<FormsProps> = (props) => {
  const {startValidation, inputValidation, onChangeText} = props;
  const value = useRef('');
  const [error, setError] = useState({isValid: true, errorMessage: ''});

  useEffect(() => {
    if (startValidation) {
      setError({
        isValid: inputValidation(value.current).isValid,
        errorMessage: inputValidation(value.current).errorMessage,
      });
    }
  }, [startValidation, inputValidation]);

  const handleValidation = (input: string) => {
    value.current = input;
    if (startValidation) {
      setError({
        isValid: inputValidation(value.current).isValid,
        errorMessage: inputValidation(value.current).errorMessage,
      });
    }
    const validation = inputValidation(input);
    onChangeText({
      value: input,
      valid: validation.isValid,
    });
  };

  return (
    <StyledFormView>
      <StyledLabel fontColor={error.isValid ? '#b2babb' : '#cb2c2a'}>
        {props.label}
      </StyledLabel>
      <StyledTextField
        onChangeText={handleValidation}
        autoCapitalize="none"
        backgroundColor={error.isValid ? '#515A5A' : '#d94745'}
      />
      {!error.isValid && <Error>{error.errorMessage}</Error>}
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
