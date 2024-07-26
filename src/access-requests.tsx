import { Action, ActionPanel, getPreferenceValues, List } from "@raycast/api";
import { formatRelative } from "date-fns";
import { useMemo, useState } from "react";

import { AccessRequestsQuery } from "./generated/graphql";
import { useAccessRequests } from "./hooks/useAccessRequests";

type AccessRequest = AccessRequestsQuery["accessRequests"]["edges"][number]["node"];

interface AccessRequestListItemProps {
  accessRequest: AccessRequest;
}

function AccessRequestListItem({ accessRequest }: AccessRequestListItemProps) {
  const preferences = getPreferenceValues<Preferences>();

  return (
    <List.Item
      title={`${accessRequest.user.firstName} ${accessRequest.user.lastName}`}
      detail={
        <List.Item.Detail
          markdown={`**Reason:** ${accessRequest.reason}`}
          metadata={
            <List.Item.Detail.Metadata>
              <List.Item.Detail.Metadata.Label
                title="Requested At"
                text={formatRelative(accessRequest.requestedAt, new Date())}
              />
              <List.Item.Detail.Metadata.Label title="Resource" text={accessRequest.resource.name} />
            </List.Item.Detail.Metadata>
          }
        />
      }
      actions={
        <ActionPanel>
          <ActionPanel.Section>
            <Action.OpenInBrowser
              title="Open in Browser"
              url={`https://${preferences.tenantSlug}.twingate.com/access-requests`}
            />
          </ActionPanel.Section>
        </ActionPanel>
      }
    />
  );
}

export default function Command() {
  const [searchTerm, setSearchTerm] = useState("");
  const { isLoading, accessRequests } = useAccessRequests();

  const filteredAccessRequests = useMemo(
    () =>
      accessRequests?.edges.filter((accessRequest) => {
        if (!searchTerm) return true;

        const totalSearch =
          `${accessRequest.node.user.firstName} ${accessRequest.node.user.lastName} ${accessRequest.node.user.email} `.toLowerCase();

        return totalSearch.includes(searchTerm.toLowerCase());
      }) || [],
    [accessRequests],
  );

  return (
    <List
      isLoading={isLoading}
      onSearchTextChange={setSearchTerm}
      searchText={searchTerm}
      searchBarPlaceholder="Search access requests..."
      throttle
      filtering={false}
      isShowingDetail={true}
    >
      <List.Section title="Results" subtitle={filteredAccessRequests.length.toString()}>
        {filteredAccessRequests.map((accessRequest) => (
          <AccessRequestListItem key={accessRequest.node.id} accessRequest={accessRequest.node} />
        ))}
      </List.Section>
    </List>
  );
}
