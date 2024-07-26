// import { getPreferenceValues } from "@raycast/api";
import { getPreferenceValues } from "@raycast/api";
import { GraphQLClient } from "graphql-request";

import { getSdk } from "../generated/graphql";

let twingate: ReturnType<typeof getSdk> | null = null;

const preferences = getPreferenceValues<Preferences>();

export function getTwingateClient() {
  if (!preferences.apiKey) {
    throw new Error("No API key found in preferences. Please add your Twingate API key.");
  }

  twingate = getSdk(
    new GraphQLClient("https://stoopkidhome.twingate.com/api/graphql/", {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": preferences.apiKey,
      },
    }),
  );

  return { twingate };
}
