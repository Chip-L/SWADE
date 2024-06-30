import { AugmentedRequest, RESTDataSource } from "@apollo/datasource-rest";
import { PowerRecord, PowerRecords } from "../types";
import { getRequiredEnv } from "../utils/env";
// import { PowerRecordModel, PowerRecordsModel } from "../types/powerModels";

const apiKey = getRequiredEnv("AIRTABLE_API_KEY");

export class AirTableAPI extends RESTDataSource {
  override baseURL = "https://api.airtable.com/v0/apppqY4AVymi8uA8E/";

  override willSendRequest(_path: string, request: AugmentedRequest) {
    request.headers["authorization"] = `Bearer ${apiKey}`;
  }

  getPowersList() {
    return this.get<PowerRecords>(`Powers`);
  }

  getPower(id: string) {
    return this.get<PowerRecord>(`Powers/${id}`);
  }

  getPowerModifiersList() {
    //  const params = new URLSearchParams({
    //     maxRecords: String(maxRecords)
    //   });

    return this.get(`PowerModifiers`);
  }

  getPowerModifier(id: string) {
    return this.get(`PowerModifiers/${id}`);
  }
}
