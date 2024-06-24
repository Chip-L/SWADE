import { POWERS } from "../../database";
import { MutationResolvers } from "../../types/__generates__/types";

export const powerMutation: MutationResolvers = {
  editPower: (_, { id }) => {
    return POWERS.filter((p) => p.id === id);
  },
};
