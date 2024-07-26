import { Action, ActionPanel, getPreferenceValues, List } from "@raycast/api";
import { formatRelative } from "date-fns";
import { useState } from "react";

import { GroupsQuery, GroupType } from "./generated/graphql";
import { useGroups } from "./hooks/useGroups";

const groupTypeNames: Record<GroupType, string> = {
  [GroupType.Manual]: "Manual",
  [GroupType.System]: "System",
  [GroupType.Synced]: "Synced",
};

type Group = GroupsQuery["groups"]["edges"][number]["node"];

interface GroupListItemProps {
  group: Group;
}

function GroupListItem({ group }: GroupListItemProps) {
  const preferences = getPreferenceValues<Preferences>();

  return (
    <List.Item
      title={group.name}
      detail={
        <List.Item.Detail
          metadata={
            <List.Item.Detail.Metadata>
              <List.Item.Detail.Metadata.Label title="Created At" text={formatRelative(group.createdAt, new Date())} />
              <List.Item.Detail.Metadata.Label
                title="Last Updated At"
                text={formatRelative(group.updatedAt, new Date())}
              />
              <List.Item.Detail.Metadata.Separator />
              <List.Item.Detail.Metadata.Label title="Type" text={groupTypeNames[group.type]} />
              <List.Item.Detail.Metadata.Label title="Resources" text={group.resources.totalCount.toString()} />
              <List.Item.Detail.Metadata.Label title="Users" text={group.users.totalCount.toString()} />
              <List.Item.Detail.Metadata.Separator />
              <List.Item.Detail.Metadata.Label title="Security Policy" text={group.securityPolicy.name} />
            </List.Item.Detail.Metadata>
          }
        />
      }
      actions={
        <ActionPanel>
          <ActionPanel.Section>
            <Action.OpenInBrowser
              title="Open in Browser"
              url={`https://${preferences.tenantSlug}.twingate.com/groups/${group.id}`}
            />
          </ActionPanel.Section>
        </ActionPanel>
      }
    />
  );
}

export default function Command() {
  const [searchTerm, setSearchTerm] = useState("");
  const { isLoading, groups } = useGroups({ searchTerm });

  return (
    <List
      isLoading={isLoading}
      onSearchTextChange={setSearchTerm}
      searchText={searchTerm}
      searchBarPlaceholder="Search groups..."
      throttle
      isShowingDetail={true}
    >
      <List.Section title="Results" subtitle={groups?.totalCount + ""}>
        {groups?.edges.map((group) => <GroupListItem key={group.node.id} group={group.node} />)}
      </List.Section>
    </List>
  );
}
