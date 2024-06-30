import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/typeDefs",
  generates: {
    "./src/types/__generates__/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "../context#Context",
        mappers: {
          PowerRecords: "../powerModels#PowerRecordsModel",
          PowerRecord: "../powerModels#PowerRecordModel",
          Power: "../powerModels#PowerModel",
        },
      },
    },
  },
};

export default config;
