import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
import Vue from 'vue'

const apolloClient = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
})

export const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})

Vue.use(VueApollo);