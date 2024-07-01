import { Resolvers } from "../../types";

export const powerQuery: Resolvers = {
  Query: {
    getPowerList: async (_, __, { dataSources }) => {
      const data = await dataSources.airTableAPI.getPowersList();

      return data;
    },
  },

  PowerRecord: {
    fields: (parent) => {
      return parent.fields ?? {};
    },
  },

  Power: {
    relatedPower: async ({ relatedPower }, _, { dataSources }) => {
      const powerList = [];

      if (relatedPower && relatedPower.length > 0) {
        for (const power of relatedPower) {
          if (power) {
            const data = await dataSources.airTableAPI.getPower(power.id);
            powerList.push(data);
          }
        }
      }
      return powerList;
    },
  },
};
