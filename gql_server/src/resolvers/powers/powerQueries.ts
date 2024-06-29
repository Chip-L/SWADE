import { POWERS } from "../../database";

export const powerQuery = {
  getPowerList: () => {
    return POWERS;
  },
};

// export const PowerModifier = {
//   powerModifiers: ({ powerModifiersId }) => {
//     return POWER_MODIFIERS.find((pm) => pm.id === powerModifiersId);
//   },
// };
