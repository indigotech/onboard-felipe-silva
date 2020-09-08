import {ApolloClient, InMemoryCache, gql, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import AsyncStorage from '@react-native-community/async-storage';

const httpLink = createHttpLink({
  uri: 'https://tq-template-server-sample.herokuapp.com/graphql',
});

const authLink = setContext(async (_, {headers}) => {
  const token = await AsyncStorage.getItem('@storage_token');
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

async function getUserListclient() {
  const query = await client.query({
    query: gql`
      query User {
        users(pageInfo: {offset: 0}) {
          nodes {
            name
            email
            id
          }
        }
      }
    `,
  });
  return query;
}

export default getUserListclient;
