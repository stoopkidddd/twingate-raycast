import { Action, ActionPanel, getPreferenceValues, List } from "@raycast/api";
import { formatRelative } from "date-fns";
import { useState } from "react";

import { ConnectorsQuery } from "./generated/graphql";
import { useConnectors } from "./hooks/useConnectors";
import { connectorStateMap } from "./utils/textMaps";

type Connector = ConnectorsQuery["connectors"]["edges"][number]["node"];

interface ConnectorListItemProps {
  connector: Connector;
}

function ConnectorListItem({ connector }: ConnectorListItemProps) {
  const preferences = getPreferenceValues<Preferences>();

  return (
    <List.Item
      title={connector.name}
      detail={
        <List.Item.Detail
          metadata={
            <List.Item.Detail.Metadata>
              <List.Item.Detail.Metadata.Label
                title="Created At"
                text={formatRelative(connector.createdAt, new Date())}
              />
              <List.Item.Detail.Metadata.Label
                title="Last Updated At"
                text={formatRelative(connector.updatedAt, new Date())}
              />
              <List.Item.Detail.Metadata.Separator />
              <List.Item.Detail.Metadata.Label title="Status" text={connectorStateMap[connector.state]} />
              {connector.lastHeartbeatAt && (
                <List.Item.Detail.Metadata.Label
                  title="Last Heartbeat At"
                  text={formatRelative(connector.lastHeartbeatAt, new Date())}
                />
              )}
              {connector.version && <List.Item.Detail.Metadata.Label title="Version" text={connector.version} />}
              <List.Item.Detail.Metadata.Label title="Remote Network" text={connector.remoteNetwork.name} />
              <List.Item.Detail.Metadata.Separator />
              {connector.publicIP && <List.Item.Detail.Metadata.Label title="Public IP" text={connector.publicIP} />}
            </List.Item.Detail.Metadata>
          }
        />
      }
      actions={
        <ActionPanel>
          <ActionPanel.Section>
            <Action.OpenInBrowser
              title="Open in Browser"
              url={`https://${preferences.tenantSlug}.twingate.com/connectors/${connector.id}`}
            />
          </ActionPanel.Section>
        </ActionPanel>
      }
    />
  );
}

export default function Command() {
  const [searchTerm, setSearchTerm] = useState("");
  const { isLoading, connectors } = useConnectors({ searchTerm });

  return (
    <List
      isLoading={isLoading}
      onSearchTextChange={setSearchTerm}
      searchText={searchTerm}
      searchBarPlaceholder="Search connectors..."
      throttle
      isShowingDetail={true}
    >
      <List.Section title="Results" subtitle={connectors?.totalCount + ""}>
        {connectors?.edges.map((connector) => <ConnectorListItem key={connector.node.id} connector={connector.node} />)}
      </List.Section>
    </List>
  );
}
