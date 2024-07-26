import { useCachedPromise } from "@raycast/utils";

import { getTwingateClient } from "../api/twingateClient";

interface UseRemoteNetworksProps {
  searchTerm: string;
}

export function useRemoteNetworks({ searchTerm }: UseRemoteNetworksProps) {
  const { twingate } = getTwingateClient();

  const { data: remoteNetworks, isLoading } = useCachedPromise(
    async (query) => {
      const result = await twingate.remoteNetworks({ filter: { name: { contains: query } } });
      return result.remoteNetworks;
    },
    [searchTerm],
  );

  return { remoteNetworks, isLoading };
}
