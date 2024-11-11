import { table } from "./storage";

// Create the API
// Create the API
export const api = new sst.aws.ApiGatewayV2("Api", {
  transform: {
    route: {
      handler: {
        link: [table],
      },
      args: {
        auth: { iam: true }
      },
    }
  }
});

api.route("POST /notes", { handler: "packages/functions/src/create.main", dev: false});
api.route("GET /notes/{id}", { handler: "packages/functions/src/get.main", dev: false});