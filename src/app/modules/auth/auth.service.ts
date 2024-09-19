import AppError from "../../error/AppError";
import { User } from "../User/user.model";
import httpStatus from "http-status"; 'http-status'

const login = async (payload: {
    email: string;
    password: string;
}) =>{
    const currentUser = await User.findOne({
        email : payload.email
    }).select('+password')
    if(!currentUser){
        throw new AppError(404, 'User does not exists.')
    }
    const isPasswordMatch = currentUser.password === payload.password;
    if(!isPasswordMatch){
        throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!')
    }
    return currentUser;
}

export const authServices  ={
    login
}