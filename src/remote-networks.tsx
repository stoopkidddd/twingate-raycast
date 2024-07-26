import { Action, ActionPanel, List, Image, getPreferenceValues } from "@raycast/api";
import { formatRelative } from "date-fns";
import { useState } from "react";

import { ConnectorState, RemoteNetworkLocation, RemoteNetworksQuery } from "./generated/graphql";
import { useRemoteNetworks } from "./hooks/useRemoteNetworks";

const iconMap: Record<RemoteNetworkLocation, string> = {
  [RemoteNetworkLocation.Aws]: "aws-2.png",
  [RemoteNetworkLocation.Azure]: "azure.png",
  [RemoteNetworkLocation.GoogleCloud]: "google-cloud.png",
  [RemoteNetworkLocation.OnPremise]: "on-prem.png",
  [RemoteNetworkLocation.Other]: "on-prem.png",
};

const connectorStateMap: Record<ConnectorState, string> = {
  [ConnectorState.Alive]: "Connected",
  [ConnectorState.DeadNoRelays]: "No Relays",
  [ConnectorState.DeadNoHeartbeat]: "No Heartbeat",
  [ConnectorState.DeadHeartbeatTooOld]: "Heartbeat Too Old",
};

type RemoteNetwork = RemoteNetworksQuery["remoteNetworks"]["edges"][number]["node"];

interface RemoteNetworkListItemProps {
  remoteNetwork: RemoteNetwork;
}

function RemoteNetworkListItem({ remoteNetwork }: RemoteNetworkListItemProps) {
  const preferences = getPreferenceValues<Preferences>();

  return (
    <List.Item
      title={remoteNetwork.name}
      icon={{ source: iconMap[remoteNetwork.location], mask: Image.Mask.Circle }}
      detail={
        <List.Item.Detail
          metadata={
            <List.Item.Detail.Metadata>
              <List.Item.Detail.Metadata.Label
                title="Created At"
                text={formatRelative(remoteNetwork.createdAt, new Date())}
              />
              <List.Item.Detail.Metadata.Label
                title="Last Updated At"
                text={formatRelative(remoteNetwork.updatedAt, new Date())}
              />
              <List.Item.Detail.Metadata.Separator />
              <List.Item.Detail.Metadata.Label title="Resources" text={remoteNetwork.resources.totalCount.toString()} />
              <List.Item.Detail.Metadata.Separator />
              <List.Item.Detail.Metadata.Label
                title="Connectors"
                text={remoteNetwork.connectors.totalCount.toString()}
              />
              {remoteNetwork.connectors.edges.map((connector) => (
                <List.Item.Detail.Metadata.Label
                  key={connector.node.id}
                  title={connector.node.name}
                  text={connectorStateMap[connector.node.state]}
                  icon={{
                    source: connector.node.state === ConnectorState.Alive ? "connected.png" : "disconnected.png",
                    mask: Image.Mask.Circle,
                  }}
                />
              ))}
            </List.Item.Detail.Metadata>
          }
        />
      }
      actions={
        <ActionPanel>
          <ActionPanel.Section>
            <Action.OpenInBrowser
              title="Open in Browser"
              url={`https://${preferences.tenantSlug}.twingate.com/networks/${remoteNetwork.id}`}
            />
          </ActionPanel.Section>
        </ActionPanel>
      }
    />
  );
}

export default function Command() {
  const [searchTerm, setSearchTerm] = useState("");
  const { isLoading, remoteNetworks } = useRemoteNetworks({ searchTerm });

  return (
    <List
      isLoading={isLoading}
      onSearchTextChange={setSearchTerm}
      searchText={searchTerm}
      searchBarPlaceholder="Search remote networks..."
      throttle
      isShowingDetail={true}
    >
      <List.Section title="Results" subtitle={remoteNetworks?.totalCount + ""}>
        {remoteNetworks?.edges.map((network) => (
          <RemoteNetworkListItem key={network.node.id} remoteNetwork={network.node} />
        ))}
      </List.Section>
    </List>
  );
}
