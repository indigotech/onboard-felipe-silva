import {ApolloClient, InMemoryCache, gql} from '@apollo/client';
import AsyncStorage from '@react-native-community/async-storage';

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
  storeData(mutation.data.login.token);
  return getData();
}

const storeData = async (value: any) => {
  try {
    await AsyncStorage.setItem('@storage_token', value);
  } catch (e) {
    console.log('Error');
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_token');
    if (value !== null) {
      console.log(value);
    }
  } catch (e) {
    console.log('Error');
  }
};
