import { model, Schema } from "mongoose";
import { IProduct } from "./product.interface";



const productSchema = new Schema<IProduct>({
    name: {
        type: String,
        required: true
    },
    sold: {
        type: Number,
        default: 0
    },
    category: {
        type: String, 
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    photo: {
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
    isRecommended: {
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


productSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } })
    next();
})
productSchema.pre('findOne', function (next) {
    this.find({ isDeleted: { $ne: true } })
    next();
})


export const Product = model<IProduct>('Product', productSchema);

