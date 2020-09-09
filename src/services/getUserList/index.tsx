import {ApolloClient, InMemoryCache, gql, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import AsyncStorage from '@react-native-community/async-storage';
import tokenKey from '../../tokenKey';

interface queries {
  data: {};
  users: {};
  count: number;
  nodes: [];
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

// async function getCount() {
//   return client.query({
//     query: gql`
//       query User {
//         users(pageInfo: {offset: 0}) {
//           count
//         }
//       }
//     `,
//   });
// }

async function getUserList(offset: any) {
  //   const countQuery = await getCount();
  //   const count = countQuery.data.users.count;
  return client.query({
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
}

export default getUserList;
