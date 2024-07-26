import { List, ActionPanel, Action, getPreferenceValues } from "@raycast/api";
import { formatRelative } from "date-fns";
import { useState } from "react";

import { ResourcesQuery } from "./generated/graphql";
import { useResources } from "./hooks/useResources";

type Resource = ResourcesQuery["resources"]["edges"][number]["node"];

function getAccessCountText(resource: Resource) {
  let serviceAccountsCount = 0;
  let groupsCount = 0;
  resource.access.edges.forEach((access) => {
    access.node.__typename === "Group" ? groupsCount++ : serviceAccountsCount++;
  });

  return `${serviceAccountsCount} Service Accounts, ${groupsCount} Groups`;
}

interface ResourceListItemProps {
  resource: Resource;
}

function ResourceListItem({ resource }: ResourceListItemProps) {
  const preferences = getPreferenceValues<Preferences>();

  return (
    <List.Item
      title={resource.name}
      detail={
        <List.Item.Detail
          metadata={
            <List.Item.Detail.Metadata>
              <List.Item.Detail.Metadata.Label
                title="Created At"
                text={formatRelative(resource.createdAt, new Date())}
              />
              <List.Item.Detail.Metadata.Label
                title="Updated At"
                text={formatRelative(resource.updatedAt, new Date())}
              />
              <List.Item.Detail.Metadata.Separator />
              <List.Item.Detail.Metadata.Label title="Type" text={resource.address.type} />
              <List.Item.Detail.Metadata.Label title="Address" text={resource.address.value} />
              <List.Item.Detail.Metadata.Separator />
              <List.Item.Detail.Metadata.Label title="Remote Network" text={resource.remoteNetwork.name} />
              {resource.alias && <List.Item.Detail.Metadata.Label title="Alias" text={resource.alias} />}
              {resource.securityPolicy && (
                <>
                  <List.Item.Detail.Metadata.Separator />
                  <List.Item.Detail.Metadata.Label title="Resource Policy" text={resource.securityPolicy.name} />
                </>
              )}
              <List.Item.Detail.Metadata.Separator />
              <List.Item.Detail.Metadata.Label title="Access" text={getAccessCountText(resource)} />
            </List.Item.Detail.Metadata>
          }
        />
      }
      actions={
        <ActionPanel>
          <ActionPanel.Section>
            <Action.OpenInBrowser
              title="Open Admin Console in Browser"
              url={`https://${preferences.tenantSlug}.twingate.com/resources/${resource.id}`}
            />
          </ActionPanel.Section>
        </ActionPanel>
      }
    />
  );
}

export default function Command() {
  const [searchTerm, setSearchTerm] = useState("");
  const { isLoading, resources } = useResources({ searchTerm });

  return (
    <List
      isLoading={isLoading}
      onSearchTextChange={setSearchTerm}
      searchText={searchTerm}
      searchBarPlaceholder="Search resources..."
      throttle
      isShowingDetail={true}
    >
      <List.Section title="Results" subtitle={resources?.totalCount + ""}>
        {resources?.edges.map((resource) => <ResourceListItem key={resource.node.id} resource={resource.node} />)}
      </List.Section>
    </List>
  );
}
