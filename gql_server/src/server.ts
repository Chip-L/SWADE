import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";
import { AirTableAPI } from "./dataSources";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async () => {
    const { cache } = server;

    return {
      dataSources: {
        airTableAPI: new AirTableAPI({ cache }),
      },
    };
  },
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
