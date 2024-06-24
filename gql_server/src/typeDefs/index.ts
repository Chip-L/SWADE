import { gql } from "graphql-tag";

export const typeDefs = gql/* GraphQL */ `
  type Power {
    id: ID!
    power: String!
    alternateName: String
    relatedPower: [ID]
    rank: String
    powerPoints: Int
    range: String
    duration: String
    durationMultiplier: Int
    summary: String
    trappings: String
    fullDescription: String
    book: String
    pageNumber: Int
    isSpecial: Boolean
    powerModifiers: [PowerModifier]
  }

  type PowerModifier {
    id: ID!
    modifierName: String
    description: String
    shortModifierName: String
    cost: Int
    takeMultiple: Boolean
    isRequired: Boolean
  }

  type Query {
    getPowerList: [Power]!
  }

  type EditPowerResponse {
    code: Int!
    success: Boolean!
    message: String!
    power: Power
  }

  type Mutation {
    editPower(id: ID!): EditPowerResponse
  }
`;
