import { useCachedPromise } from "@raycast/utils";

import { getTwingateClient } from "../api/twingateClient";

interface UseServiceAccountsProps {
  searchTerm: string;
}

export function useServiceAccounts({ searchTerm }: UseServiceAccountsProps) {
  const { twingate } = getTwingateClient();

  const { data: serviceAccounts, isLoading } = useCachedPromise(
    async (query) => {
      const result = await twingate.serviceAccounts({ filter: { name: { contains: query } } });
      return result.serviceAccounts;
    },
    [searchTerm],
  );

  return { serviceAccounts, isLoading };
}
