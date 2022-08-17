import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl6wzte134rmb01uj33nj6lbf/master',
  cache: new InMemoryCache()
})