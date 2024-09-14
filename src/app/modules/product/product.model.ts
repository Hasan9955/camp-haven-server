import { model, Schema } from "mongoose";
import { IProduct } from "./product.interface";



const productSchema = new Schema<IProduct>({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    quantity: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: 'available'
    } 
}, 
{
    timestamps: true
});


export const Product = model<IProduct>('Product', productSchema);

