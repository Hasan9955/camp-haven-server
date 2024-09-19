import { Types } from "mongoose";



export interface IProduct {
    _id: Types.ObjectId;
    name: string;
    description: string;
    price: string;
    quantity: number;
    photo: string;
    sold: number;
    status: 'available' | 'unavailable';
    isDeleted: boolean;
    brand: string;

}