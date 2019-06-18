import {
    GraphQLObjectType,
    GraphQLSchema
  } from 'graphql'
/** QUERY  */
import Single from './queries/Single/Single'



/** MUTATION */



export default new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: {
        Single,
      }
    }),
    // mutation: new GraphQLObjectType({
    //   name: 'Mutation',
    //   fields: {
       
    //   }
    // })
  })