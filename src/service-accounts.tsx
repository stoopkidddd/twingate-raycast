import { Action, ActionPanel, getPreferenceValues, List } from "@raycast/api";
import { formatRelative } from "date-fns";
import { Fragment, useState } from "react";

import { ServiceAccountKeyStatus, ServiceAccountsQuery } from "./generated/graphql";
import { useServiceAccounts } from "./hooks/useServiceAccounts";

const keyStatusMap: Record<ServiceAccountKeyStatus, string> = {
  [ServiceAccountKeyStatus.Active]: "Active",
  [ServiceAccountKeyStatus.Expired]: "Expired",
  [ServiceAccountKeyStatus.Revoked]: "Revoked",
};

type ServiceAccount = ServiceAccountsQuery["serviceAccounts"]["edges"][number]["node"];

interface ServiceAccountListItemProps {
  serviceAccount: ServiceAccount;
}

function ServiceAccountListItem({ serviceAccount }: ServiceAccountListItemProps) {
  const preferences = getPreferenceValues<Preferences>();

  return (
    <List.Item
      title={serviceAccount.name}
      detail={
        <List.Item.Detail
          metadata={
            <List.Item.Detail.Metadata>
              <List.Item.Detail.Metadata.Label
                title="Created At"
                text={formatRelative(serviceAccount.createdAt, new Date())}
              />
              <List.Item.Detail.Metadata.Label
                title="Last Updated At"
                text={formatRelative(serviceAccount.updatedAt, new Date())}
              />
              <List.Item.Detail.Metadata.Separator />
              <List.Item.Detail.Metadata.Label
                title="Number of Resources"
                text={serviceAccount.resources.totalCount.toString()}
              />
              <List.Item.Detail.Metadata.Separator />
              <List.Item.Detail.Metadata.Label
                title="Number of Keys"
                text={serviceAccount.keys.totalCount.toString()}
              />
              <List.Item.Detail.Metadata.Separator />
              {serviceAccount.keys.edges.map((key) => (
                <Fragment key={key.node.id}>
                  <List.Item.Detail.Metadata.Label title={key.node.name} text={keyStatusMap[key.node.status]} />
                  {key.node.updatedAt && (
                    <List.Item.Detail.Metadata.Label
                      title="Updated At"
                      text={formatRelative(key.node.updatedAt, new Date())}
                    />
                  )}
                  <List.Item.Detail.Metadata.Label
                    title="Created At"
                    text={formatRelative(key.node.createdAt, new Date())}
                  />
                  {key.node.expiresAt && (
                    <List.Item.Detail.Metadata.Label
                      title="Expires At"
                      text={formatRelative(key.node.expiresAt, new Date())}
                    />
                  )}
                  {key.node.revokedAt && (
                    <List.Item.Detail.Metadata.Label
                      title="Revoked At"
                      text={formatRelative(key.node.revokedAt, new Date())}
                    />
                  )}
                  <List.Item.Detail.Metadata.Separator />
                </Fragment>
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
              url={`https://${preferences.tenantSlug}.twingate.com/service-accounts/${serviceAccount.id}`}
            />
          </ActionPanel.Section>
        </ActionPanel>
      }
    />
  );
}

export default function Command() {
  const [searchTerm, setSearchTerm] = useState("");
  const { isLoading, serviceAccounts } = useServiceAccounts({ searchTerm });

  return (
    <List
      isLoading={isLoading}
      onSearchTextChange={setSearchTerm}
      searchText={searchTerm}
      searchBarPlaceholder="Search service accounts.."
      throttle
      isShowingDetail={true}
    >
      <List.Section title="Results" subtitle={serviceAccounts?.totalCount + ""}>
        {serviceAccounts?.edges.map((serviceAccount) => (
          <ServiceAccountListItem key={serviceAccount.node.id} serviceAccount={serviceAccount.node} />
        ))}
      </List.Section>
    </List>
  );
}
