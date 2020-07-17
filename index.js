const { ApolloServer } = require("apollo-server");
const { wrapSchema, RenameObjectFields } = require("@graphql-tools/wrap");
const { makeExecutableSchema } = require("@graphql-tools/schema");

let schema = makeExecutableSchema({
  typeDefs: `
        type Query {
            test: String
        }
    `,
  resolvers: {
    Query: {
      test: () => "hello, world",
    },
  },
});

schema = wrapSchema(schema, [
  new RenameObjectFields((_, fieldName) => "prefix1_" + fieldName),
  new RenameObjectFields((_, fieldName) => "prefix2_" + fieldName),
]);

new ApolloServer({
  schema,
})
  .listen(4000)
  .then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
