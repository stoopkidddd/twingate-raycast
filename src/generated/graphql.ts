import { GraphQLClient, RequestOptions } from "graphql-request";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions["requestHeaders"];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
};

export type AccessConnection = {
  __typename?: "AccessConnection";
  /** Contains the nodes in this connection. */
  edges: Array<AccessEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A Relay edge containing a `Access` and its cursor. */
export type AccessEdge = {
  __typename?: "AccessEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The timestamp at which the access edge expires. */
  expiresAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** The item at the end of the edge. */
  node: Principal;
  /** The Security Policy directly assigned to this access edge. */
  securityPolicy?: Maybe<SecurityPolicy>;
  /** The usage-based auto-lock duration configured on the edge (in days). */
  usageBasedAutolockDurationDays?: Maybe<Scalars["Int"]["output"]>;
};

export type AccessFilterInput = {
  principalType?: InputMaybe<PrincipleTypeFilterOperatorInput>;
};

export type AccessInput = {
  /** The timestamp at which the access edge expires. If unspecified, the access edge's existing expiration remains unchanged. If null, the access edge's existing expiration is removed. This value should be null when the principal is a Service Account. */
  expiresAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** The ID of the principal (Group or Service Account) whose access is being configured. */
  principalId: Scalars["ID"]["input"];
  /** The ID of the Security Policy that must be used by this access edge. If unspecified, the access edge's existing policy remains unchanged. If null, the access edge' existing policy is removed. This value should be null when the principal is a Service Account. */
  securityPolicyId?: InputMaybe<Scalars["ID"]["input"]>;
  /** The usage-based auto-lock duration configured on the edge (in days). If unspecified, the access edge's existing auto-lock duration remains unchanged. If null, the access edge's existing auto-lock duration is removed. This value should be null when the principal is a Service Account. */
  usageBasedAutolockDurationDays?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AccessRequest = Node & {
  __typename?: "AccessRequest";
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  reason?: Maybe<Scalars["String"]["output"]>;
  requestedAt: Scalars["DateTime"]["output"];
  /** The Resource to which the user is requesting access. */
  resource: Resource;
  /** The User who makes this Access Request. */
  user: User;
};

export type AccessRequestApproveMutation = {
  __typename?: "AccessRequestApproveMutation";
  /** Any error encountered causing the mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Whether the mutation was successful. */
  ok: Scalars["Boolean"]["output"];
};

export type AccessRequestConnection = {
  __typename?: "AccessRequestConnection";
  /** Contains the nodes in this connection. */
  edges: Array<AccessRequestEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A Relay edge containing a `AccessRequest` and its cursor. */
export type AccessRequestEdge = {
  __typename?: "AccessRequestEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: AccessRequest;
};

export type AccessRequestFilterInput = {
  resourceId?: InputMaybe<ResourceIdFilterOperationInput>;
  userId?: InputMaybe<UserIdFilterOperationInput>;
};

export type AccessRequestRejectMutation = {
  __typename?: "AccessRequestRejectMutation";
  /** Any error encountered causing the mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Whether the mutation was successful. */
  ok: Scalars["Boolean"]["output"];
};

export enum AddressType {
  Dns = "DNS",
  Ip = "IP",
}

/** Filter input object for a boolean field. Each field of this input object represents a filtering operation. When multiple fields are specified, they are combined with an `AND` operation. */
export type BooleanFilterOperatorInput = {
  eq?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Connector = Node & {
  __typename?: "Connector";
  createdAt: Scalars["DateTime"]["output"];
  /** Indicates whether status notifications are enabled for the connector. */
  hasStatusNotificationsEnabled: Scalars["Boolean"]["output"];
  hostname?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  lastHeartbeatAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** The Connector's name. */
  name: Scalars["String"]["output"];
  /** The Connector's private IP address. */
  privateIPs: Array<Scalars["String"]["output"]>;
  /** The Connector's public IP address. */
  publicIP?: Maybe<Scalars["String"]["output"]>;
  /** The Remote Network this Connector belongs to. */
  remoteNetwork: RemoteNetwork;
  state: ConnectorState;
  updatedAt: Scalars["DateTime"]["output"];
  /** The Connector's version. */
  version?: Maybe<Scalars["String"]["output"]>;
};

export type ConnectorConnection = {
  __typename?: "ConnectorConnection";
  /** Contains the nodes in this connection. */
  edges: Array<ConnectorEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the connection. */
  totalCount: Scalars["Int"]["output"];
};

export type ConnectorCreateMutation = {
  __typename?: "ConnectorCreateMutation";
  /** The Connector that was created. */
  entity?: Maybe<Connector>;
  /** Any error encountered causing the mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Whether the mutation was successful. */
  ok: Scalars["Boolean"]["output"];
};

export type ConnectorDeleteMutation = {
  __typename?: "ConnectorDeleteMutation";
  /** Any error was encountered causing the delete mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Records whether the delete mutation was successfully completed */
  ok: Scalars["Boolean"]["output"];
};

/** A Relay edge containing a `Connector` and its cursor. */
export type ConnectorEdge = {
  __typename?: "ConnectorEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: Connector;
};

export type ConnectorFilterInput = {
  name?: InputMaybe<StringFilterOperatorInput>;
  state?: InputMaybe<ConnectorStateFilterOperatorInput>;
};

export type ConnectorGenerateTokensMutation = {
  __typename?: "ConnectorGenerateTokensMutation";
  /** Generated tokens to use for this Connector. */
  connectorTokens?: Maybe<ConnectorTokens>;
  /** Any error encountered causing the mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Whether the mutation was successful. */
  ok: Scalars["Boolean"]["output"];
};

export enum ConnectorState {
  Alive = "ALIVE",
  DeadHeartbeatTooOld = "DEAD_HEARTBEAT_TOO_OLD",
  DeadNoHeartbeat = "DEAD_NO_HEARTBEAT",
  DeadNoRelays = "DEAD_NO_RELAYS",
}

/** Filter input object for a ConnectorState enum field. Each field of this input object represents a filtering operation. When multiple fields are specified, they are combined with an `AND` operation. */
export type ConnectorStateFilterOperatorInput = {
  in?: InputMaybe<Array<ConnectorState>>;
};

export type ConnectorTokens = {
  __typename?: "ConnectorTokens";
  /** Access token to use for this Connector. */
  accessToken: Scalars["String"]["output"];
  /** Refresh token to use for this Connector. */
  refreshToken: Scalars["String"]["output"];
};

export type ConnectorUpdateMutation = {
  __typename?: "ConnectorUpdateMutation";
  /** The Connector being updated. */
  entity?: Maybe<Connector>;
  /** Any error encountered causing the mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Whether the mutation was successful. */
  ok: Scalars["Boolean"]["output"];
};

export type Device = Node & {
  __typename?: "Device";
  /** The Device's active state. */
  activeState: DeviceActiveState;
  clientVersion?: Maybe<Scalars["String"]["output"]>;
  /** The Device's type, e.g. LAPTOP, DESKTOP, or MOBILE. */
  deviceType: DeviceType;
  hardwareModel?: Maybe<Scalars["String"]["output"]>;
  hostname?: Maybe<Scalars["String"]["output"]>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  /** The Device's internet security configuration. */
  internetSecurityConfiguration: Scalars["String"]["output"];
  isTrusted: Scalars["Boolean"]["output"];
  /** @deprecated The last connected timestamp is no longer available. */
  lastConnectedAt?: Maybe<Scalars["DateTime"]["output"]>;
  lastFailedLoginAt?: Maybe<Scalars["DateTime"]["output"]>;
  lastSuccessfulLoginAt?: Maybe<Scalars["DateTime"]["output"]>;
  manufacturerName?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  /** The name of this Device's operating system. */
  osName?: Maybe<DeviceOsName>;
  osVersion?: Maybe<Scalars["String"]["output"]>;
  serialNumber?: Maybe<Scalars["String"]["output"]>;
  /** The User this Device belongs to. */
  user: User;
  username?: Maybe<Scalars["String"]["output"]>;
};

/** The Device's active state. */
export enum DeviceActiveState {
  Active = "ACTIVE",
  Archived = "ARCHIVED",
  Blocked = "BLOCKED",
}

/** Filter input object for a DeviceActiveState enum field. Each field of this input object represents a filtering operation. When multiple fields are specified, they are combined with an `AND` operation. */
export type DeviceActiveStateFilterOperatorInput = {
  in?: InputMaybe<Array<DeviceActiveState>>;
};

export type DeviceArchiveMutation = {
  __typename?: "DeviceArchiveMutation";
  /** The Device being archived. */
  entity?: Maybe<Device>;
  /** Any error encountered causing the mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Whether the mutation was successful. */
  ok: Scalars["Boolean"]["output"];
};

export type DeviceBlockMutation = {
  __typename?: "DeviceBlockMutation";
  /** The Device being blocked. */
  entity?: Maybe<Device>;
  /** Any error encountered causing the mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Whether the mutation was successful. */
  ok: Scalars["Boolean"]["output"];
};

export type DeviceConnection = {
  __typename?: "DeviceConnection";
  /** Contains the nodes in this connection. */
  edges: Array<DeviceEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A Relay edge containing a `Device` and its cursor. */
export type DeviceEdge = {
  __typename?: "DeviceEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: Device;
};

export type DeviceFilterInput = {
  activeState?: InputMaybe<DeviceActiveStateFilterOperatorInput>;
  isTrusted?: InputMaybe<BooleanFilterOperatorInput>;
  serialNumber?: InputMaybe<StringFilterOperatorInput>;
};

/** The name of the Device's operating system. */
export enum DeviceOsName {
  Android = "ANDROID",
  ChromeOs = "CHROME_OS",
  Ios = "IOS",
  Ipados = "IPADOS",
  Linux = "LINUX",
  MacOs = "MAC_OS",
  Windows = "WINDOWS",
}

/** The Device's type, e.g. LAPTOP, DESKTOP, or MOBILE. */
export enum DeviceType {
  Desktop = "DESKTOP",
  Generic = "GENERIC",
  Laptop = "LAPTOP",
  Mobile = "MOBILE",
  Tablet = "TABLET",
}

export type DeviceUnarchiveMutation = {
  __typename?: "DeviceUnarchiveMutation";
  /** The Device being unarchived. */
  entity?: Maybe<Device>;
  /** Any error encountered causing the mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Whether the mutation was successful. */
  ok: Scalars["Boolean"]["output"];
};

export type DeviceUnblockMutation = {
  __typename?: "DeviceUnblockMutation";
  /** The Device being unblocked. */
  entity?: Maybe<Device>;
  /** Any error encountered causing the mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Whether the mutation was successful. */
  ok: Scalars["Boolean"]["output"];
};

export type DeviceUpdateMutation = {
  __typename?: "DeviceUpdateMutation";
  /** The Device being updated. */
  entity?: Maybe<Device>;
  /** Any error encountered causing the mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Whether the mutation was successful. */
  ok: Scalars["Boolean"]["output"];
};

export type Group = Node & {
  __typename?: "Group";
  createdAt: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  /** Indicates whether the Group is active. */
  isActive: Scalars["Boolean"]["output"];
  name: Scalars["String"]["output"];
  originId?: Maybe<Scalars["String"]["output"]>;
  /** Which Resources this Group contains. */
  resources: ResourceConnection;
  /** The Security Policy assigned to the Group. */
  securityPolicy: SecurityPolicy;
  /** The Groups type, e.g. manual or synced. */
  type: GroupType;
  updatedAt: Scalars["DateTime"]["output"];
  /** Which Users are members of this Group. */
  users: UserConnection;
};

export type GroupResourcesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<ResourceFilterInput>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type GroupUsersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<UserFilterInput>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type GroupConnection = {
  __typename?: "GroupConnection";
  /** Contains the nodes in this connection. */
  edges: Array<GroupEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the connection. */
  totalCount: Scalars["Int"]["output"];
};

export type GroupCreateMutation = {
  __typename?: "GroupCreateMutation";
  /** The Group that was created. */
  entity?: Maybe<Group>;
  /** Any error encountered causing the mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Whether the mutation was successful. */
  ok: Scalars["Boolean"]["output"];
};

export type GroupDeleteMutation = {
  __typename?: "GroupDeleteMutation";
  /** Any error was encountered causing the delete mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Records whether the delete mutation was successfully completed */
  ok: Scalars["Boolean"]["output"];
};

/** A Relay edge containing a `Group` and its cursor. */
export type GroupEdge = {
  __typename?: "GroupEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: Group;
};

export type GroupFilterInput = {
  isActive?: InputMaybe<BooleanFilterOperatorInput>;
  name?: InputMaybe<StringFilterOperatorInput>;
  originId?: InputMaybe<StringFilterOperatorInput>;
  type?: InputMaybe<GroupTypeFilterOperatorInput>;
};

export enum GroupType {
  Manual = "MANUAL",
  Synced = "SYNCED",
  System = "SYSTEM",
}

/** Filter input object for a GroupType enum field. Each field of this input object represents a filtering operation. When multiple fields are specified, they are combined with an `AND` operation. */
export type GroupTypeFilterOperatorInput = {
  in?: InputMaybe<Array<GroupType>>;
};

export type GroupUpdateMutation = {
  __typename?: "GroupUpdateMutation";
  /** The Group being updated. */
  entity?: Maybe<Group>;
  /** Any error encountered causing the mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Whether the mutation was successful. */
  ok: Scalars["Boolean"]["output"];
};

export type MutationsRoot = {
  __typename?: "MutationsRoot";
  accessRequestApprove: AccessRequestApproveMutation;
  accessRequestReject: AccessRequestRejectMutation;
  connectorCreate: ConnectorCreateMutation;
  connectorDelete: ConnectorDeleteMutation;
  connectorGenerateTokens: ConnectorGenerateTokensMutation;
  connectorUpdate: ConnectorUpdateMutation;
  deviceArchive: DeviceArchiveMutation;
  deviceBlock: DeviceBlockMutation;
  deviceUnarchive: DeviceUnarchiveMutation;
  deviceUnblock: DeviceUnblockMutation;
  deviceUpdate: DeviceUpdateMutation;
  groupCreate: GroupCreateMutation;
  groupDelete: GroupDeleteMutation;
  groupUpdate: GroupUpdateMutation;
  remoteNetworkCreate: RemoteNetworkCreateMutation;
  remoteNetworkDelete: RemoteNetworkDeleteMutation;
  remoteNetworkUpdate: RemoteNetworkUpdateMutation;
  resourceAccessAdd: ResourceAccessAddMutation;
  resourceAccessRemove: ResourceAccessRemoveMutation;
  resourceAccessSet: ResourceAccessSetMutation;
  resourceCreate: ResourceCreateMutation;
  resourceDelete: ResourceDeleteMutation;
  resourceUpdate: ResourceUpdateMutation;
  securityPolicyUpdate: SecurityPolicyUpdateMutation;
  serialNumbersCreate: SerialNumbersCreateMutation;
  serialNumbersDelete: SerialNumbersDeleteMutation;
  serviceAccountCreate: ServiceAccountCreateMutation;
  serviceAccountDelete: ServiceAccountDeleteMutation;
  serviceAccountKeyCreate: ServiceAccountKeyCreateMutation;
  serviceAccountKeyDelete: ServiceAccountKeyDeleteMutation;
  serviceAccountKeyRevoke: ServiceAccountKeyRevokeMutation;
  serviceAccountKeyUpdate: ServiceAccountKeyUpdateMutation;
  serviceAccountUpdate: ServiceAccountUpdateMutation;
  userCreate: UserCreateMutation;
  userDelete: UserDeleteMutation;
  userDetailsUpdate: UserDetailsUpdateMutation;
  userRoleUpdate: UserRoleUpdateMutation;
};

export type MutationsRootAccessRequestApproveArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationsRootAccessRequestRejectArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationsRootConnectorCreateArgs = {
  hasStatusNotificationsEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  remoteNetworkId: Scalars["ID"]["input"];
};

export type MutationsRootConnectorDeleteArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationsRootConnectorGenerateTokensArgs = {
  connectorId: Scalars["ID"]["input"];
};

export type MutationsRootConnectorUpdateArgs = {
  hasStatusNotificationsEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  id: Scalars["ID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationsRootDeviceArchiveArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationsRootDeviceBlockArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationsRootDeviceUnarchiveArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationsRootDeviceUnblockArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationsRootDeviceUpdateArgs = {
  id: Scalars["ID"]["input"];
  isTrusted: Scalars["Boolean"]["input"];
};

export type MutationsRootGroupCreateArgs = {
  name: Scalars["String"]["input"];
  resourceIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  securityPolicyId?: InputMaybe<Scalars["ID"]["input"]>;
  userIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type MutationsRootGroupDeleteArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationsRootGroupUpdateArgs = {
  addedResourceIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  addedUserIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  id: Scalars["ID"]["input"];
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  removedResourceIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  removedUserIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  resourceIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  securityPolicyId?: InputMaybe<Scalars["ID"]["input"]>;
  userIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type MutationsRootRemoteNetworkCreateArgs = {
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  location?: InputMaybe<RemoteNetworkLocation>;
  name: Scalars["String"]["input"];
};

export type MutationsRootRemoteNetworkDeleteArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationsRootRemoteNetworkUpdateArgs = {
  id: Scalars["ID"]["input"];
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  location?: InputMaybe<RemoteNetworkLocation>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationsRootResourceAccessAddArgs = {
  access: Array<AccessInput>;
  resourceId: Scalars["ID"]["input"];
};

export type MutationsRootResourceAccessRemoveArgs = {
  principalIds: Array<Scalars["ID"]["input"]>;
  resourceId: Scalars["ID"]["input"];
};

export type MutationsRootResourceAccessSetArgs = {
  access: Array<AccessInput>;
  resourceId: Scalars["ID"]["input"];
};

export type MutationsRootResourceCreateArgs = {
  address: Scalars["String"]["input"];
  alias?: InputMaybe<Scalars["String"]["input"]>;
  groupIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  isBrowserShortcutEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  isVisible?: InputMaybe<Scalars["Boolean"]["input"]>;
  name: Scalars["String"]["input"];
  protocols?: InputMaybe<ProtocolsInput>;
  remoteNetworkId: Scalars["ID"]["input"];
  securityPolicyId?: InputMaybe<Scalars["ID"]["input"]>;
  usageBasedAutolockDurationDays?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationsRootResourceDeleteArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationsRootResourceUpdateArgs = {
  addedGroupIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  address?: InputMaybe<Scalars["String"]["input"]>;
  alias?: InputMaybe<Scalars["String"]["input"]>;
  groupIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  id: Scalars["ID"]["input"];
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  isBrowserShortcutEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  isVisible?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  protocols?: InputMaybe<ProtocolsInput>;
  remoteNetworkId?: InputMaybe<Scalars["ID"]["input"]>;
  removedGroupIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  securityPolicyId?: InputMaybe<Scalars["ID"]["input"]>;
  usageBasedAutolockDurationDays?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationsRootSecurityPolicyUpdateArgs = {
  addedGroupIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  groupIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  id: Scalars["ID"]["input"];
  removedGroupIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type MutationsRootSerialNumbersCreateArgs = {
  serialNumbers: Array<Scalars["String"]["input"]>;
};

export type MutationsRootSerialNumbersDeleteArgs = {
  serialNumbers: Array<Scalars["String"]["input"]>;
};

export type MutationsRootServiceAccountCreateArgs = {
  name: Scalars["String"]["input"];
  resourceIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type MutationsRootServiceAccountDeleteArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationsRootServiceAccountKeyCreateArgs = {
  expirationTime: Scalars["Int"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  serviceAccountId: Scalars["ID"]["input"];
};

export type MutationsRootServiceAccountKeyDeleteArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationsRootServiceAccountKeyRevokeArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationsRootServiceAccountKeyUpdateArgs = {
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
};

export type MutationsRootServiceAccountUpdateArgs = {
  addedResourceIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  id: Scalars["ID"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  removedResourceIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  resourceIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type MutationsRootUserCreateArgs = {
  email: Scalars["String"]["input"];
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<UserRole>;
  shouldSendInvite?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationsRootUserDeleteArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationsRootUserDetailsUpdateArgs = {
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<UserStateUpdateInput>;
};

export type MutationsRootUserRoleUpdateArgs = {
  id: Scalars["ID"]["input"];
  role: UserRole;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object */
  id: Scalars["ID"]["output"];
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]["output"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"]["output"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"]["output"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]["output"]>;
};

export type PortRange = {
  __typename?: "PortRange";
  /** The end value of the port range (inclusive). The value must be between 1 and 65535 inclusive. This `end` value can be the same as the `start` value, which means only a single port is allowed. */
  end: Scalars["Int"]["output"];
  /** The start value of the port range (inclusive). The value must be between 1 and 65535 inclusive. */
  start: Scalars["Int"]["output"];
};

export type PortRangeInput = {
  /** The end value of the port range (inclusive). The value must be between 1 and 65535 inclusive. This `end` value can be the same as the `start` value, which means only a single port is allowed. */
  end: Scalars["Int"]["input"];
  /** The start value of the port range (inclusive). The value must be between 1 and 65535 inclusive. */
  start: Scalars["Int"]["input"];
};

export type Principal = Group | ServiceAccount;

export enum PrincipalType {
  Group = "GROUP",
  ServiceAccount = "SERVICE_ACCOUNT",
}

/** Filter input object for a PrincipalType enum field. Each field of this input object represents a filtering operation. When multiple fields are specified, they are combined with an `AND` operation. */
export type PrincipleTypeFilterOperatorInput = {
  in?: InputMaybe<Array<PrincipalType>>;
};

export type ProtocolInput = {
  /** Whether to allow all ports or restrict protocol access within certain port ranges. */
  policy: ProtocolPolicy;
  /** List of port ranges to allow access. This input is only used when the `policy` is `RESTRICTED`. If the value is empty, no port is allowed to access */
  ports?: Array<PortRangeInput>;
};

export enum ProtocolPolicy {
  AllowAll = "ALLOW_ALL",
  Restricted = "RESTRICTED",
}

export type ProtocolsInput = {
  /** Whether to allow or deny ICMP */
  allowIcmp: Scalars["Boolean"]["input"];
  /** Specified to allow or restrict TCP access within certain port ranges. */
  tcp: ProtocolInput;
  /** Specified to allow or restrict UDP access within certain port ranges. */
  udp: ProtocolInput;
};

export type QueriesRoot = {
  __typename?: "QueriesRoot";
  /** Fetches a single Access Request by its ID. */
  accessRequest?: Maybe<AccessRequest>;
  /** Fetches a list of Access Requests. */
  accessRequests: AccessRequestConnection;
  /** Fetches a single Connector by its ID. */
  connector?: Maybe<Connector>;
  /** Fetches a list of Connectors. */
  connectors: ConnectorConnection;
  /** Look up a Device by its ID. */
  device?: Maybe<Device>;
  /** Fetches a list of Devices. */
  devices: DeviceConnection;
  /** Fetches a Group by its ID. */
  group?: Maybe<Group>;
  /** Fetches a list of Groups. */
  groups: GroupConnection;
  /** Fetches a single Remote Network by ID or name. */
  remoteNetwork?: Maybe<RemoteNetwork>;
  /** Fetches a list of Remote Networks. */
  remoteNetworks: RemoteNetworkConnection;
  /** Fetch a single Resource by its ID. */
  resource?: Maybe<Resource>;
  /** Fetches a list of Resources. */
  resources: ResourceConnection;
  /** Fetches a list of Security Policies. */
  securityPolicies: SecurityPolicyConnection;
  /** Fetches a single Security Policy by its ID or name. */
  securityPolicy?: Maybe<SecurityPolicy>;
  /** List of serial numbers */
  serialNumbers: SerialNumberConnection;
  /** Fetches a single Service Account by its ID. */
  serviceAccount?: Maybe<ServiceAccount>;
  /** Fetches a single Service Account Key by its ID. */
  serviceAccountKey?: Maybe<ServiceAccountKey>;
  /** Fetches a list of Service Accounts. */
  serviceAccounts: ServiceAccountConnection;
  /** Fetches a single User by its ID. */
  user?: Maybe<User>;
  /** Fetches a list of Users. */
  users: UserConnection;
};

export type QueriesRootAccessRequestArgs = {
  id: Scalars["ID"]["input"];
};

export type QueriesRootAccessRequestsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<AccessRequestFilterInput>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueriesRootConnectorArgs = {
  id: Scalars["ID"]["input"];
};

export type QueriesRootConnectorsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<ConnectorFilterInput>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueriesRootDeviceArgs = {
  id: Scalars["ID"]["input"];
};

export type QueriesRootDevicesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<DeviceFilterInput>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueriesRootGroupArgs = {
  id: Scalars["ID"]["input"];
};

export type QueriesRootGroupsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<GroupFilterInput>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueriesRootRemoteNetworkArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueriesRootRemoteNetworksArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<RemoteNetworkFilterInput>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueriesRootResourceArgs = {
  id: Scalars["ID"]["input"];
};

export type QueriesRootResourcesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<ResourceFilterInput>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueriesRootSecurityPoliciesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<SecurityPolicyFilterField>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueriesRootSecurityPolicyArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueriesRootSerialNumbersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<SerialNumberFilterInput>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueriesRootServiceAccountArgs = {
  id: Scalars["ID"]["input"];
};

export type QueriesRootServiceAccountKeyArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueriesRootServiceAccountsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<ServiceAccountFilterInput>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueriesRootUserArgs = {
  id: Scalars["ID"]["input"];
};

export type QueriesRootUsersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<UserFilterInput>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type RemoteNetwork = Node & {
  __typename?: "RemoteNetwork";
  /** Which Connectors are part of this Remote Network. */
  connectors: ConnectorConnection;
  createdAt: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  /** Indicates whether the Remote Network is active. */
  isActive: Scalars["Boolean"]["output"];
  /** The Remote Network's location. */
  location: RemoteNetworkLocation;
  name: Scalars["String"]["output"];
  /** Which Resources are assigned to this Remote Network. */
  resources: ResourceConnection;
  updatedAt: Scalars["DateTime"]["output"];
};

export type RemoteNetworkConnectorsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<ConnectorFilterInput>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type RemoteNetworkResourcesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<ResourceFilterInput>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type RemoteNetworkConnection = {
  __typename?: "RemoteNetworkConnection";
  /** Contains the nodes in this connection. */
  edges: Array<RemoteNetworkEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the connection. */
  totalCount: Scalars["Int"]["output"];
};

export type RemoteNetworkCreateMutation = {
  __typename?: "RemoteNetworkCreateMutation";
  /** The Remote Network that was created. */
  entity?: Maybe<RemoteNetwork>;
  /** Any error encountered causing the mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Whether the mutation was successful. */
  ok: Scalars["Boolean"]["output"];
};

export type RemoteNetworkDeleteMutation = {
  __typename?: "RemoteNetworkDeleteMutation";
  /** Any error was encountered causing the delete mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Records whether the delete mutation was successfully completed */
  ok: Scalars["Boolean"]["output"];
};

/** A Relay edge containing a `RemoteNetwork` and its cursor. */
export type RemoteNetworkEdge = {
  __typename?: "RemoteNetworkEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: RemoteNetwork;
};

export type RemoteNetworkFilterInput = {
  name?: InputMaybe<StringFilterOperatorInput>;
};

export enum RemoteNetworkLocation {
  Aws = "AWS",
  Azure = "AZURE",
  GoogleCloud = "GOOGLE_CLOUD",
  OnPremise = "ON_PREMISE",
  Other = "OTHER",
}

export type RemoteNetworkUpdateMutation = {
  __typename?: "RemoteNetworkUpdateMutation";
  /** The Remote Network being updated. */
  entity?: Maybe<RemoteNetwork>;
  /** Any error encountered causing the mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Whether the mutation was successful. */
  ok: Scalars["Boolean"]["output"];
};

export type Resource = Node & {
  __typename?: "Resource";
  /** Which principals have access to this Resource. */
  access: AccessConnection;
  /** The Resource's address. */
  address: ResourceAddress;
  /** The address of the Resource's alias. */
  alias?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  /**
   * Which Groups have access to this Resource.
   * @deprecated Use `access` connection instead.
   */
  groups: GroupConnection;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  /** Indicates whether the Resource is active. */
  isActive: Scalars["Boolean"]["output"];
  /** Indicates whether this Resource will display a browser shortcut in the Client. */
  isBrowserShortcutEnabled: Scalars["Boolean"]["output"];
  /** Indicates whether this Resource will be in the main Resource list in the Client. */
  isVisible: Scalars["Boolean"]["output"];
  name: Scalars["String"]["output"];
  /** How a Resource's ports are configured. */
  protocols: ResourceProtocols;
  /** Which Remote Network this Resource belongs to. */
  remoteNetwork: RemoteNetwork;
  /** Which Security Policy required to access the Resource. */
  securityPolicy?: Maybe<SecurityPolicy>;
  /**
   * Which Service Accounts have access to this Resource.
   * @deprecated Use `access` connection instead.
   */
  serviceAccounts: ServiceAccountConnection;
  updatedAt: Scalars["DateTime"]["output"];
  /** The usage-based auto-lock duration configured on the Resource (in days). */
  usageBasedAutolockDurationDays?: Maybe<Scalars["Int"]["output"]>;
};

export type ResourceAccessArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<AccessFilterInput>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ResourceGroupsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<GroupFilterInput>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ResourceServiceAccountsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<ServiceAccountFilterInput>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ResourceAccessAddMutation = {
  __typename?: "ResourceAccessAddMutation";
  /** The Resource associated with the access being updated. */
  entity?: Maybe<Resource>;
  /** Any error encountered causing the mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Whether the mutation was successful. */
  ok: Scalars["Boolean"]["output"];
};

export type ResourceAccessRemoveMutation = {
  __typename?: "ResourceAccessRemoveMutation";
  /** The Resource associated with the access being updated. */
  entity?: Maybe<Resource>;
  /** Any error encountered causing the mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Whether the mutation was successful. */
  ok: Scalars["Boolean"]["output"];
};

export type ResourceAccessSetMutation = {
  __typename?: "ResourceAccessSetMutation";
  /** The Resource associated with the access being updated. */
  entity?: Maybe<Resource>;
  /** Any error encountered causing the mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Whether the mutation was successful. */
  ok: Scalars["Boolean"]["output"];
};

export type ResourceAddress = {
  __typename?: "ResourceAddress";
  /** IP or DNS resource. */
  type: AddressType;
  value: Scalars["String"]["output"];
};

export type ResourceConnection = {
  __typename?: "ResourceConnection";
  /** Contains the nodes in this connection. */
  edges: Array<ResourceEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the connection. */
  totalCount: Scalars["Int"]["output"];
};

export type ResourceCreateMutation = {
  __typename?: "ResourceCreateMutation";
  /** The Resource that was created. */
  entity?: Maybe<Resource>;
  /** Any error encountered causing the mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Whether the mutation was successful. */
  ok: Scalars["Boolean"]["output"];
};

export type ResourceDeleteMutation = {
  __typename?: "ResourceDeleteMutation";
  /** Any error was encountered causing the delete mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Records whether the delete mutation was successfully completed */
  ok: Scalars["Boolean"]["output"];
};

/** A Relay edge containing a `Resource` and its cursor. */
export type ResourceEdge = {
  __typename?: "ResourceEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: Resource;
};

export type ResourceFilterInput = {
  name?: InputMaybe<StringFilterOperatorInput>;
};

/** Filter input object for a Resource ID field. Each field of this input object represents a filtering operation. When multiple fields are specified, they are combined with an `AND` operation. */
export type ResourceIdFilterOperationInput = {
  in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

export type ResourceProtocol = {
  __typename?: "ResourceProtocol";
  /** Whether the protocol is allowed on all ports or restricted to certain ranges */
  policy: ProtocolPolicy;
  /** List of port ranges to allow access. This value should be ignored when `policy` is `ALLOW_ALL`. */
  ports: Array<PortRange>;
};

export type ResourceProtocols = {
  __typename?: "ResourceProtocols";
  /** True if ICMP is allowed. Otherwise, false. */
  allowIcmp: Scalars["Boolean"]["output"];
  /** Protocol policy for TCP. */
  tcp: ResourceProtocol;
  /** Protocol policy for UDP. */
  udp: ResourceProtocol;
};

export type ResourceUpdateMutation = {
  __typename?: "ResourceUpdateMutation";
  /** The Resource being updated. */
  entity?: Maybe<Resource>;
  /** Any error encountered causing the mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Whether the mutation was successful. */
  ok: Scalars["Boolean"]["output"];
};

export type SecurityPolicy = Node & {
  __typename?: "SecurityPolicy";
  createdAt: Scalars["DateTime"]["output"];
  /** Groups assigned to this Security Policy. */
  groups: GroupConnection;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  /** The type of Security Policy. */
  policyType: SecurityPolicyType;
  updatedAt: Scalars["DateTime"]["output"];
};

export type SecurityPolicyGroupsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<GroupFilterInput>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SecurityPolicyConnection = {
  __typename?: "SecurityPolicyConnection";
  /** Contains the nodes in this connection. */
  edges: Array<SecurityPolicyEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A Relay edge containing a `SecurityPolicy` and its cursor. */
export type SecurityPolicyEdge = {
  __typename?: "SecurityPolicyEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: SecurityPolicy;
};

export type SecurityPolicyFilterField = {
  name?: InputMaybe<StringFilterOperatorInput>;
  policyType?: InputMaybe<SecurityPolicyTypeFilterOperatorInput>;
};

export enum SecurityPolicyType {
  DefaultResource = "DEFAULT_RESOURCE",
  Resource = "RESOURCE",
}

/** Filter input object for a SecurityPolicyType enum field. Each field of this input object represents a filtering operation. When multiple fields are specified, they are combined with an `AND` operation. */
export type SecurityPolicyTypeFilterOperatorInput = {
  in?: InputMaybe<Array<SecurityPolicyType>>;
};

export type SecurityPolicyUpdateMutation = {
  __typename?: "SecurityPolicyUpdateMutation";
  /** The Security Policy being updated. */
  entity?: Maybe<SecurityPolicy>;
  /** Any error encountered causing the mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Whether the mutation was successful. */
  ok: Scalars["Boolean"]["output"];
};

export type SerialNumber = Node & {
  __typename?: "SerialNumber";
  createdAt: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  /** List of Devices that are serial number verified and match this serial number. */
  matchedDevices: Array<Device>;
  serialNumber: Scalars["String"]["output"];
};

export type SerialNumberConnection = {
  __typename?: "SerialNumberConnection";
  /** Contains the nodes in this connection. */
  edges: Array<SerialNumberEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** A Relay edge containing a `SerialNumber` and its cursor. */
export type SerialNumberEdge = {
  __typename?: "SerialNumberEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: SerialNumber;
};

export type SerialNumberFilterInput = {
  hasMatchedDevices?: InputMaybe<BooleanFilterOperatorInput>;
  serialNumber?: InputMaybe<StringFilterOperatorInput>;
};

export type SerialNumbersCreateMutation = {
  __typename?: "SerialNumbersCreateMutation";
  /** A list of created serial numbers. */
  entities?: Maybe<Array<SerialNumber>>;
  /** Any error encountered causing the mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Whether the mutation was successful. */
  ok: Scalars["Boolean"]["output"];
};

export type SerialNumbersDeleteMutation = {
  __typename?: "SerialNumbersDeleteMutation";
  /** Any error was encountered causing the delete mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Records whether the delete mutation was successfully completed. */
  ok: Scalars["Boolean"]["output"];
};

export type ServiceAccount = Node & {
  __typename?: "ServiceAccount";
  createdAt: Scalars["DateTime"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  /** List of Service Keys that belong to this Service Account. */
  keys: ServiceAccountKeyConnection;
  name: Scalars["String"]["output"];
  /** List of Resources that this Service Account has access to. */
  resources: ResourceConnection;
  updatedAt: Scalars["DateTime"]["output"];
};

export type ServiceAccountKeysArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ServiceAccountResourcesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<ResourceFilterInput>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ServiceAccountConnection = {
  __typename?: "ServiceAccountConnection";
  /** Contains the nodes in this connection. */
  edges: Array<ServiceAccountEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the connection. */
  totalCount: Scalars["Int"]["output"];
};

export type ServiceAccountCreateMutation = {
  __typename?: "ServiceAccountCreateMutation";
  /** The Service Account that was created. */
  entity?: Maybe<ServiceAccount>;
  /** Any error encountered causing the mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Whether the mutation was successful. */
  ok: Scalars["Boolean"]["output"];
};

export type ServiceAccountDeleteMutation = {
  __typename?: "ServiceAccountDeleteMutation";
  /** Any error was encountered causing the delete mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Records whether the delete mutation was successfully completed */
  ok: Scalars["Boolean"]["output"];
};

/** A Relay edge containing a `ServiceAccount` and its cursor. */
export type ServiceAccountEdge = {
  __typename?: "ServiceAccountEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: ServiceAccount;
};

export type ServiceAccountFilterInput = {
  name?: InputMaybe<StringFilterOperatorInput>;
};

export type ServiceAccountKey = Node & {
  __typename?: "ServiceAccountKey";
  createdAt: Scalars["DateTime"]["output"];
  expiresAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  revokedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** The Service Account. */
  serviceAccount: ServiceAccount;
  /** Indicates the status of the Service Account Key. */
  status: ServiceAccountKeyStatus;
  updatedAt: Scalars["DateTime"]["output"];
};

export type ServiceAccountKeyConnection = {
  __typename?: "ServiceAccountKeyConnection";
  /** Contains the nodes in this connection. */
  edges: Array<ServiceAccountKeyEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the connection. */
  totalCount: Scalars["Int"]["output"];
};

export type ServiceAccountKeyCreateMutation = {
  __typename?: "ServiceAccountKeyCreateMutation";
  /** The Service Account Key that was created. */
  entity?: Maybe<ServiceAccountKey>;
  /** Any error encountered causing the mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Whether the mutation was successful. */
  ok: Scalars["Boolean"]["output"];
  /** The Service Account Key token. */
  token?: Maybe<Scalars["String"]["output"]>;
};

export type ServiceAccountKeyDeleteMutation = {
  __typename?: "ServiceAccountKeyDeleteMutation";
  /** Any error was encountered causing the delete mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Records whether the delete mutation was successfully completed */
  ok: Scalars["Boolean"]["output"];
};

/** A Relay edge containing a `ServiceAccountKey` and its cursor. */
export type ServiceAccountKeyEdge = {
  __typename?: "ServiceAccountKeyEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: ServiceAccountKey;
};

export type ServiceAccountKeyRevokeMutation = {
  __typename?: "ServiceAccountKeyRevokeMutation";
  /** The Service Account Key being revoked. */
  entity?: Maybe<ServiceAccountKey>;
  /** Any error encountered causing the mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Whether the mutation was successful. */
  ok: Scalars["Boolean"]["output"];
};

export enum ServiceAccountKeyStatus {
  Active = "ACTIVE",
  Expired = "EXPIRED",
  Revoked = "REVOKED",
}

export type ServiceAccountKeyUpdateMutation = {
  __typename?: "ServiceAccountKeyUpdateMutation";
  /** The Service Account Key being updated. */
  entity?: Maybe<ServiceAccountKey>;
  /** Any error encountered causing the mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Whether the mutation was successful. */
  ok: Scalars["Boolean"]["output"];
};

export type ServiceAccountUpdateMutation = {
  __typename?: "ServiceAccountUpdateMutation";
  /** The Service Account being updated. */
  entity?: Maybe<ServiceAccount>;
  /** Any error encountered causing the mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Whether the mutation was successful. */
  ok: Scalars["Boolean"]["output"];
};

/** Filter input object for a string field. Each field of this input object represents a filtering operation. When multiple fields are specified, they are combined with an `AND` operation. */
export type StringFilterOperatorInput = {
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  eq?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  ne?: InputMaybe<Scalars["String"]["input"]>;
  regexp?: InputMaybe<Scalars["String"]["input"]>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type User = Node & {
  __typename?: "User";
  avatarUrl?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  email?: Maybe<Scalars["String"]["output"]>;
  firstName: Scalars["String"]["output"];
  /** Groups this User is a member of. */
  groups: GroupConnection;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  /**
   * True when the User has an admin role.
   * @deprecated Use `role` instead.
   */
  isAdmin: Scalars["Boolean"]["output"];
  lastName: Scalars["String"]["output"];
  /** Indicates the User's role. */
  role: UserRole;
  /** The User's state. */
  state: UserState;
  /** Indicates the User's type. */
  type: UserType;
  updatedAt: Scalars["DateTime"]["output"];
};

export type UserGroupsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<GroupFilterInput>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserConnection = {
  __typename?: "UserConnection";
  /** Contains the nodes in this connection. */
  edges: Array<UserEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the connection. */
  totalCount: Scalars["Int"]["output"];
};

export type UserCreateMutation = {
  __typename?: "UserCreateMutation";
  /** The User that was created. */
  entity?: Maybe<User>;
  /** Any error encountered causing the mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Whether the mutation was successful. */
  ok: Scalars["Boolean"]["output"];
};

export type UserDeleteMutation = {
  __typename?: "UserDeleteMutation";
  /** Any error was encountered causing the delete mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Records whether the delete mutation was successfully completed */
  ok: Scalars["Boolean"]["output"];
};

export type UserDetailsUpdateMutation = {
  __typename?: "UserDetailsUpdateMutation";
  /** The User being updated. */
  entity?: Maybe<User>;
  /** Any error encountered causing the mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Whether the mutation was successful. */
  ok: Scalars["Boolean"]["output"];
};

/** A Relay edge containing a `User` and its cursor. */
export type UserEdge = {
  __typename?: "UserEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: User;
};

export type UserFilterInput = {
  email?: InputMaybe<StringFilterOperatorInput>;
  firstName?: InputMaybe<StringFilterOperatorInput>;
  lastName?: InputMaybe<StringFilterOperatorInput>;
  role?: InputMaybe<UserRoleFilterOperatorInput>;
};

/** Filter input object for a User ID field. Each field of this input object represents a filtering operation. When multiple fields are specified, they are combined with an `AND` operation. */
export type UserIdFilterOperationInput = {
  in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

export enum UserRole {
  /** Access to Resource requests only */
  AccessReviewer = "ACCESS_REVIEWER",
  /** Full access to the Admin Console */
  Admin = "ADMIN",
  /** Full access to the Network tab, read-only access to the rest of the Admin Console */
  Devops = "DEVOPS",
  /** No access to the Admin Console */
  Member = "MEMBER",
  /** Read-only access to the Admin Console */
  Support = "SUPPORT",
}

/** Filter input object for a UserRole enum field. Each field of this input object represents a filtering operation. When multiple fields are specified, they are combined with an `AND` operation. */
export type UserRoleFilterOperatorInput = {
  in?: InputMaybe<Array<UserRole>>;
};

export type UserRoleUpdateMutation = {
  __typename?: "UserRoleUpdateMutation";
  /** The User being updated. */
  entity?: Maybe<User>;
  /** Any error encountered causing the mutation to fail. */
  error?: Maybe<Scalars["String"]["output"]>;
  /** Whether the mutation was successful. */
  ok: Scalars["Boolean"]["output"];
};

export enum UserState {
  Active = "ACTIVE",
  Disabled = "DISABLED",
  Pending = "PENDING",
}

export enum UserStateUpdateInput {
  Active = "ACTIVE",
  Disabled = "DISABLED",
}

export enum UserType {
  /** Users manually invited to Twingate through email */
  Manual = "MANUAL",
  /** Users synced to Twingate through an IdP */
  Synced = "SYNCED",
}

export type RemoteNetworksQueryVariables = Exact<{
  filter?: InputMaybe<RemoteNetworkFilterInput>;
}>;

export type RemoteNetworksQuery = {
  __typename?: "QueriesRoot";
  remoteNetworks: {
    __typename?: "RemoteNetworkConnection";
    totalCount: number;
    edges: Array<{
      __typename?: "RemoteNetworkEdge";
      node: {
        __typename?: "RemoteNetwork";
        id: string;
        createdAt: any;
        updatedAt: any;
        name: string;
        location: RemoteNetworkLocation;
        isActive: boolean;
        resources: { __typename?: "ResourceConnection"; totalCount: number };
        connectors: {
          __typename?: "ConnectorConnection";
          totalCount: number;
          edges: Array<{
            __typename?: "ConnectorEdge";
            node: {
              __typename?: "Connector";
              id: string;
              name: string;
              lastHeartbeatAt?: any | null;
              state: ConnectorState;
              publicIP?: string | null;
              privateIPs: Array<string>;
            };
          }>;
        };
      };
    }>;
  };
};

export const RemoteNetworksDocument = gql`
  query remoteNetworks($filter: RemoteNetworkFilterInput) {
    remoteNetworks(filter: $filter) {
      totalCount
      edges {
        node {
          id
          createdAt
          updatedAt
          name
          location
          isActive
          resources {
            totalCount
          }
          connectors {
            totalCount
            edges {
              node {
                id
                name
                lastHeartbeatAt
                state
                publicIP
                privateIPs
              }
            }
          }
        }
      }
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
  variables?: any,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    remoteNetworks(
      variables?: RemoteNetworksQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<RemoteNetworksQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<RemoteNetworksQuery>(RemoteNetworksDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "remoteNetworks",
        "query",
        variables,
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
