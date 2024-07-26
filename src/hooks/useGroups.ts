import { useCachedPromise } from "@raycast/utils";

import { getTwingateClient } from "../api/twingateClient";

interface UseGroupsProps {
  searchTerm: string;
}

export function useGroups({ searchTerm }: UseGroupsProps) {
  const { twingate } = getTwingateClient();

  const { data: groups, isLoading } = useCachedPromise(
    async (query) => {
      const result = await twingate.groups({ filter: { name: { contains: query } } });
      return result.groups;
    },
    [searchTerm],
  );

  return { groups, isLoading };
}
