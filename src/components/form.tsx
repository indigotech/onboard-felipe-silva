import React from 'react';
import styled from 'styled-components/native';

interface FormsProps {
  label: string;
  onChangeText: (text: string) => void;
  error: string;
}

const Forms: React.FC<FormsProps> = (props) => {
  let screen;
  if (!props.error) {
    screen = (
      <>
        <StyledLabel>{props.label}</StyledLabel>
        <StyledTextField
          onChangeText={props.onChangeText}
          autoCapitalize="none"
        />
      </>
    );
  } else {
    screen = (
      <>
        <StyledLabelError>{props.label}</StyledLabelError>
        <StyledTextFieldError
          onChangeText={props.onChangeText}
          autoCapitalize="none"
        />
        <Error>{props.error}</Error>
      </>
    );
  }
  return <StyledFormView>{screen}</StyledFormView>;
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

const StyledTextField = styled.TextInput`
  border-width: 2px;
  border-color: #a9a9a9;
  background-color: #515a5a;
  height: 40px;
  border-radius: 5px;
  width: 300px;
  text-align: center;
  color: #fff;
`;

const StyledTextFieldError = styled.TextInput`
  border-width: 2px;
  border-color: #a9a9a9;
  background-color: #d94745;
  height: 40px;
  border-radius: 5px;
  width: 300px;
  text-align: center;
  color: #fff;
`;

const StyledLabel = styled.Text`
  font-size: 12px;
  font-weight: normal;
  color: #b2babb;
  margin-bottom: 12px;
`;

const StyledLabelError = styled.Text`
  font-size: 12px;
  font-weight: normal;
  color: #cb2c2a;
  margin-bottom: 12px;
`;

export default Forms;

// <TextInput
// style={styles.loginInput}
// autoCapitalize="none"
// onChangeText={(senha) => this.setState({password: senha})}
// />

// loginInput: {
//     height: 40,
//     width: 300,
//     marginTop: 15,
//     marginBottom: 15,
//     borderColor: '#a9a9a9',
//     borderWidth: 2,
//     color: '#FFF',
//     borderRadius: 5,
//     textAlign: 'center',
//     backgroundColor: '#515A5A',
//   },
// textInput: {
//     fontSize: 15,
//     marginTop: 20,
//     color: '#B2BABB',
//   },
