import { model, Schema, Types } from "mongoose";
import { TCart } from "./cart.interface";



const cartSchema = new Schema<TCart>({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    productId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
},
{
    timestamps: true
})


export const Cart = model<TCart>('Cart', cartSchema)