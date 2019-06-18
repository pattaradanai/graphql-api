import {
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString
  } from 'graphql'
  
  export default new GraphQLObjectType({
    name: 'Single',
    description: 'this is type of Single',
    fields: {
      _id: { type: GraphQLString },
    }
  })