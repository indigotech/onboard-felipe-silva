import {gql} from '@apollo/client';

export interface CreateUserVariables {
  data: {
    email: string;
    password: string;
    name: string;
    phone: string;
    birthDate: string;
    role: string;
  };
}

export const CreateUserMutation = gql`
  mutation CreateUser($data: UserInputType!) {
    createUser(data: $data) {
      name
      email
      birthDate
      phone
      role
    }
  }
`;
