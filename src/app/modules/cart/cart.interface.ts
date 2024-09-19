import { Types } from "mongoose"


export type TCart = {
    userId: Types.ObjectId;
    productId: Types.ObjectId;
    quantity: number;
}