import {gql} from '@apollo/client';

export const userDetailQuery = gql`
  query UserDetail($id: ID!) {
    user(id: $id) {
      id
      name
      email
      birthDate
      phone
    }
  }
`;
