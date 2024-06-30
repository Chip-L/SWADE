import { AirTableAPI } from "../dataSources/airTable-api";

export type Context = {
  dataSources: {
    airTableAPI: AirTableAPI;
  };
};
