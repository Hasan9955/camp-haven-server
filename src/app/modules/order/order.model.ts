import { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";


const orderSchema = new Schema<TOrder>({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    productId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }, 
    quantity: {
        type: Number,
        required: true
    },
    totalCost: {
        type: Number,
        required: true
    }
},
{
    timestamps: true
})



export const Order = model<TOrder>('Order', orderSchema)
