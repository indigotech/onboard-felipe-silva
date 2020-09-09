import {ApolloClient, InMemoryCache, gql} from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';
import getUserList from '../getUserList';
import tokenKey from '../../tokenKey';

export async function sendLogin(email: string, password: string) {
  const client = new ApolloClient({
    uri: 'https://tq-template-server-sample.herokuapp.com/graphql',
    cache: new InMemoryCache(),
  });
  const mutation = await client.mutate({
    mutation: gql`
          mutation {
            login(data: { email: "${email}", password: "${password}"}) {
              token
            }
          }
        `,
  });
  await storeToken(mutation.data.login.token);
  try {
    const userList = (await getUserList()).data.users.nodes;
    return userList;
  } catch (error) {
    console.log(error);
  }
}

const storeToken = async (value: any) => {
  try {
    await AsyncStorage.setItem(tokenKey, value);
  } catch (error) {
    console.log(error);
  }
};
