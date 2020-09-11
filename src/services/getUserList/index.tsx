import {ApolloClient, InMemoryCache, gql, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import AsyncStorage from '@react-native-community/async-storage';
import tokenKey from '../../tokenKey';

export interface User {
  email: string;
  name: string;
  id: string;
  phone: string;
  birthDate: string;
  role: string;
}
interface UserData {
  users: {
    nodes: User[];
    pageInfo: {
      hasNextPage: boolean;
    };
  };
}

const httpLink = createHttpLink({
  uri: 'https://tq-template-server-sample.herokuapp.com/graphql',
});

const authLink = setContext(async (_, {headers}) => {
  const token = await AsyncStorage.getItem(tokenKey);
  return {
    headers: {
      ...headers,
      Authorization: token ? `${token}` : '',
    },
  };
});
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

function getUserList(offset: number) {
  return client.query<UserData>({
    query: gql`
      query User {
        users(pageInfo: {offset: ${offset}, limit: 10}) {
          nodes {
            name
            email
            id
          }
          pageInfo {
            hasNextPage
          }
        }
      }
    `,
  });
}

export default getUserList;
