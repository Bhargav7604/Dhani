export interface OrderModificationRows {
  id: number;
  userId: string;
  signalId:  number;
  legId: number;
  modifyCount:number;
  quantity:number;
  modifyPrice:number;
  modifyDateTime:string;
  remarks:string;
}