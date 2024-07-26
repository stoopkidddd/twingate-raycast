import { useCachedPromise } from "@raycast/utils";

import { getTwingateClient } from "../api/twingateClient";

interface UseConnectorsProps {
  searchTerm: string;
}

export function useConnectors({ searchTerm }: UseConnectorsProps) {
  const { twingate } = getTwingateClient();

  const { data: connectors, isLoading } = useCachedPromise(
    async (query) => {
      const result = await twingate.connectors({ filter: { name: { contains: query } } });
      return result.connectors;
    },
    [searchTerm],
  );

  return { connectors, isLoading };
}
