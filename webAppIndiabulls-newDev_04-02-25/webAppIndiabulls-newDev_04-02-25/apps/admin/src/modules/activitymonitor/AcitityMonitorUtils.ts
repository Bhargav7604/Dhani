export interface ActivityMonitorRows {
  id: number;
  clientId: number;
  name: string;
  token: string;
  tokenType:string;
  isWelcomeAccepted:boolean;
  welcomeAcknowledgedTime:string;
  tokenGeneratedTime: string;
  lastActiveTime: string;
  lastActiveMachineId: string;
  tokenGeneratedMachineId: string;
}
