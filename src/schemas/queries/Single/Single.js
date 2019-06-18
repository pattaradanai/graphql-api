import {
    GraphQLList
  } from 'graphql'
  import dotenv from 'dotenv'
  import SingleType from '../../../types/Single'
  import Single from '../../../models/Single'
  
  export default {
    type: new GraphQLList(SingleType),
    description: 'a Single Data',
    async resolve () {
      dotenv.config()
      let response = await Single.find({})
      console.log(response);
    //   response = response.map(single => (console.log(single)))
      return response
    }
  }