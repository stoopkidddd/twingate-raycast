import { ConnectorState } from "../generated/graphql";

export const connectorStateMap: Record<ConnectorState, string> = {
  [ConnectorState.Alive]: "Connected",
  [ConnectorState.DeadNoRelays]: "No Relays",
  [ConnectorState.DeadNoHeartbeat]: "No Heartbeat",
  [ConnectorState.DeadHeartbeatTooOld]: "Heartbeat Too Old",
};
