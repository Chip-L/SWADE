import { Resolvers } from "../types/__generates__/types";
import { powerMutation, powerQuery } from "./powers";

export const resolvers: Resolvers = {
  Query: { ...powerQuery },
  Mutation: { ...powerMutation },
};
