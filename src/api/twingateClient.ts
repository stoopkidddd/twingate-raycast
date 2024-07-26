// import { getPreferenceValues } from "@raycast/api";
import { GraphQLClient } from "graphql-request";

import { getSdk } from "../generated/graphql";

let twingate: ReturnType<typeof getSdk> | null = null;

// TODO: get preferences from raycast
// const preferences = getPreferenceValues<Preferences>();

export function getTwingateClient() {
  twingate = getSdk(
    new GraphQLClient("https://stoopkidhome.twingate.com/api/graphql/", {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY":
          "oVLjkZldsJ6HsNFqf9u-zqiJFx7TzQPB4bRNKBiA3pQb1lRhTfSNmh_-3Zs4Edq3j5Z9LoQDtKMOKTDzNPLapTr6D0wisxJi_dJ4aopkmWYmALJbn8CzMn0nlPusIGh7YHf9tw",
      },
    }),
  );

  return { twingate };
}
