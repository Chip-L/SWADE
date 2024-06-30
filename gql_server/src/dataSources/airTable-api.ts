import { AugmentedRequest, RESTDataSource } from "@apollo/datasource-rest";

export class AirTableAPI extends RESTDataSource {
  override baseURL = "https://api.airtable.com/v0/apppqY4AVymi8uA8E/";

  override willSendRequest(_path: string, request: AugmentedRequest) {
    request.headers["authorization"] =
      "Bearer patopbsuuXqmsuaVx.855037b6bc31a3325f7836eb7127d1cfe1c9895ed8d8fdd8d9ae90871429dd5c";
  }

  getPowersList() {
    return this.get(`Powers`);
  }

  getPower(id: string) {
    return this.get(`Powers/${id}`);
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
