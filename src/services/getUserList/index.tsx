import {ApolloClient, InMemoryCache, gql, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import AsyncStorage from '@react-native-community/async-storage';
import tokenKey from '../../tokenKey';

interface queries {
  data: {
    users: {
      nodes: {};
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
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

async function getUserList(offset: number) {
  const userList = await client.query({
    query: gql`
      query User {
        users(pageInfo: {offset: ${offset}, limit: 10}) {
          nodes {
            name
            email
            id
          }
        }
      }
    `,
  });
  try {
    return userList.data.users.nodes;
  } catch (e) {
    console.log(e);
  }
}

export default getUserList;
