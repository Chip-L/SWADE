export const powerQuery = {
  Query: {
    getPowerList: async (_, __, { dataSources }) => {
      const data = await dataSources.airTableAPI.getPowersList();

      console.log(data);
      return data;
    },
  },

  // Powers: {
  //   powerModifiers: ({ powerId }, _, { dataSources }) => {
  //     return dataSources.airTableAPI.getPower(powerId);
  //   },
  // },
};
