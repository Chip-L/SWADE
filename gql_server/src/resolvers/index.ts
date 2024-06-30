import { Resolvers } from "../types/__generates__/types";
import { powerQuery } from "./powers";

export const resolvers: Resolvers = {
  Query: { ...powerQuery.Query },
  // Mutation: { ...powerMutation },
};
