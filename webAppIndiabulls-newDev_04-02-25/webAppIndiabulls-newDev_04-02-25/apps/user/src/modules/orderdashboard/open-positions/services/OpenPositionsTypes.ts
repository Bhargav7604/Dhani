import { ServiceResponseType } from "../../../../services/BaseMapper";

export interface OpenPositionTypes {
    dateTime:string;
    symbol:string;
    quantity:number;
    price:number;
    status:string | number;
    orderId:number;
    sname:string;
    sno: string;
    expiry: string;
    mtm: string;
    strike: string;
}

export type OpenPositionsResponseMapper = ServiceResponseType<OpenPositionTypes[]>