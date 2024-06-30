import { gql } from "graphql-tag";

export const powersTypeDef = gql/* GraphQL */ `
  type PowerRecords {
    records: [PowerRecord]
  }
  type PowerRecord {
    id: ID!
    createdTime: String
    fields: Power
  }
  type Power {
    power_id: Int
    power: String
    alternateName: String
    relatedPower: [ID]
    rank: String
    powerPoints: String
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
    # powerModifiers: [PowerModifierRecord]
  }

  type PowerModifierRecords {
    records: [PowerModifierRecord]
  }
  type PowerModifierRecord {
    id: ID!
    createdTime: String
    fields: PowerModifier
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

  type Query {
    getPowerList: PowerRecords!
  }

  # type EditPowerResponse {
  #   code: Int!
  #   success: Boolean!
  #   message: String!
  #   power: Power
  # }

  # extend type Mutation {
  #   editPower(id: Int!): EditPowerResponse
  # }
`;

export default powersTypeDef;
