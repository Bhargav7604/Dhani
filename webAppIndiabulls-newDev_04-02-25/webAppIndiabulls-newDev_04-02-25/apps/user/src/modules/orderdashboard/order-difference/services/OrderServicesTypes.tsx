import { ServiceResponseType } from "../../../../services/BaseMapper";

export interface OrderBookTypes{
    orderId?: number;
    id?: number | string;
    dateTime?:string;
    symbol?:string;
    quantity?:string;
    price?:string;
    status?:string;
    sname?:string;
    sno?:string;
}

export type OrderBookResponseMapper = ServiceResponseType<OrderBookTypes[]>

export interface OrderBookPostTypes{
    date?:string
}
export type OrderBookPostMapper = ServiceResponseType<OrderBookPostTypes[]>