import { mergeTypeDefs } from "@graphql-tools/merge";
import powersTypeDef from "./powers";
import root from "./root";

const types = [root, powersTypeDef];

export const typeDefs = mergeTypeDefs(types);
