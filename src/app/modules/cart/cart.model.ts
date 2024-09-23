import { model, Schema, Types } from "mongoose";
import { TCart } from "./cart.interface";



const cartSchema = new Schema<TCart>({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    productId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
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