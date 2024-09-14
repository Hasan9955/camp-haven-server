import { Types } from "mongoose";


export interface IUser {
    _id: Types.ObjectId;
    name: string;
    email: string;
    address: string;
    phone: string;
    password: string; 
    role: 'admin' | 'user';
    isDeleted: boolean;
}

