import { POWERS } from "../../database";
import { QueryResolvers } from "../../types/__generates__/types";

export const powerQuery: QueryResolvers = {
  getPowerList: () => {
    return POWERS;
  },
};
