import { Types } from "mongoose";



export interface IProduct {
    _id: Types.ObjectId;
    name: string;
    description: string;
    price: string;
    quantity: number;
    status: 'available' | 'unavailable';
    isDeleted: boolean;
    brand: string;

}