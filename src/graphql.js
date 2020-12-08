import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
import Vue from 'vue'

const apolloClient = new ApolloClient({
  uri: 'https://assignment-rewoke.herokuapp.com/graphql'
})

export const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
  })

  Vue.use(VueApollo);