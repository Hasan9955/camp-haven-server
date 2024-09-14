import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";



const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: 0,
        minLength: [6, 'password should be at last 6 character']
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }

},
{
    timestamps: true
})


export const User = model<IUser>('User', userSchema)

