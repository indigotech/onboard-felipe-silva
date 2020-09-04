import {ApolloClient, InMemoryCache, gql} from '@apollo/client';

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
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}
