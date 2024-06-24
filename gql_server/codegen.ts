import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/typeDefs/index.ts",
  generates: {
    "./src/types/__generates__/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      // config: {
      //   contextType: "../context#context",
      // },
    },
  },
};

export default config;
