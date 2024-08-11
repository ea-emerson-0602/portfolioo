// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "h57kz60b",
  dataset: "production",
  apiVersion: "2024-08-10",
  useCdn: false,
};

const client = createClient(config);

export default client;