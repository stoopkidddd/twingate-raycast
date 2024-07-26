import { useCachedPromise } from "@raycast/utils";

import { getTwingateClient } from "../api/twingateClient";

export function useAccessRequests() {
  const { twingate } = getTwingateClient();

  const { data: accessRequests, isLoading } = useCachedPromise(async () => {
    const result = await twingate.accessRequests();
    return result.accessRequests;
  }, []);

  return { accessRequests, isLoading };
}
