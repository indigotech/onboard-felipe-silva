import {ApolloClient, InMemoryCache, gql} from '@apollo/client';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default function sendLogin(email: string, password: string) {
  const client = new ApolloClient({
    uri: 'https://tq-template-server-sample.herokuapp.com/graphql',
    cache: new InMemoryCache(),
  });
  client
    .mutate({
      mutation: gql`
        mutation {
          login(data: { email: "${email}", password: "${password}"}) {
            token
          }
        }
      `,
    })
    .then((result) => storeData(result.data.login.token))
    .catch((error) => Alert.alert(error.message));
}

const storeData = async (value: any) => {
  try {
    await AsyncStorage.setItem('@storage_Key', value);
    getData();
  } catch (e) {
    // saving error
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@storage_Key');
    if (value !== null) {
      console.log(value);
    }
  } catch (e) {
    console.log('erro');
  }
};
