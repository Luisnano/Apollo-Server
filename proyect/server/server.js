const { ApolloServer, gql } = require('apollo-server');


/*Lets try to create a User type and displaying it on de web api*/
const typeDefs = gql`
  type Query {
    greeting: String
  },
  type Query {
    first_name: String,
    last_name: String,
    id: String
  }
`;
/*Lets try to create a User type and displaying it on de web api*/

const resolvers = {
  Query: {
    greeting: () => 'Hello GraphQL world!👋',
  },
  Query:{
    first_name: () => 'Luis Fernando',
    last_name: () => 'Torres Moya',
    id: () => '32093709-S'
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server
  .listen({ port: 9000 })
  .then(({ url }) => console.log(`Server running at ${url}`));