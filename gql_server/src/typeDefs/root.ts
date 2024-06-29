import gql from "graphql-tag";

const root = gql/* GraphQL */ `
  type Query {
    root: String
  }
  type Mutation {
    root: String
  }
`;

export default root;
