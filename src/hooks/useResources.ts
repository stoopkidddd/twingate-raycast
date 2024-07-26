import { useCachedPromise } from "@raycast/utils";

import { getTwingateClient } from "../api/twingateClient";

interface UseResourcesProps {
  searchTerm: string;
}

export function useResources({ searchTerm }: UseResourcesProps) {
  const { twingate } = getTwingateClient();

  const { data: resources, isLoading } = useCachedPromise(
    async (query) => {
      const result = await twingate.resources({ filter: { name: { contains: query } } });
      return result.resources;
    },
    [searchTerm],
  );

  return { resources, isLoading };
}
