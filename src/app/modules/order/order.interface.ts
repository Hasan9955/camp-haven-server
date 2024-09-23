import { Types } from "mongoose";


export interface TOrder {
    userId: Types.ObjectId;
    productId: Types.ObjectId;
    address: string;
    phone: string;
    quantity: number;
    totalCost: number;
    cartId?: Types.ObjectId;
}

