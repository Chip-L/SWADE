import { Resolvers } from "../../types";

export const powerQuery: Resolvers = {
  Query: {
    getPowerList: async (_, __, { dataSources }) => {
      const data = await dataSources.airTableAPI.getPowersList();

      return data;
    },
  },
};
