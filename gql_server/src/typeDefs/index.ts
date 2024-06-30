import { mergeTypeDefs } from "@graphql-tools/merge";
import powersTypeDef from "./powers";

const types = [powersTypeDef];

export const typeDefs = mergeTypeDefs(types);
