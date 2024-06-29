import { gql } from "graphql-tag";

export const powersTypeDef = gql/* GraphQL */ `
  type Power {
    id: Int!
    power: String!
    alternateName: String
    relatedPower: [Int]
    rank: String
    powerPoints: Int
    range: String
    rangeMultiplier: Int
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
    id: Int!
    modifierName: String
    description: String
    shortModifierName: String
    cost: Int
    takeMultiple: Boolean
    isRequired: Boolean
  }

  extend type Query {
    getPowerList: [Power]!
  }

  type EditPowerResponse {
    code: Int!
    success: Boolean!
    message: String!
    power: Power
  }

  extend type Mutation {
    editPower(id: Int!): EditPowerResponse
  }
`;

export default powersTypeDef;
