import { IUser } from "./user.interface";
import { User } from "./user.model"



const createUser = async (payload: IUser) => {
    const result = await User.create(payload)
    result.password = '';
    return result;
}

const getAllUsers = async () => {
    const result = await User.find();
    return result;
}

const getSingleUser = async (id: string) => {
    const result = await User.findById(id)
    return result;
}

const updateUser = async (id: string, payload: Partial<IUser>) => {

    const result = await User.findByIdAndUpdate(
        id,
        payload,
        {
            new: true,
            runValidators: true
        }
    )
    return result;
}

const deleteUser = async (id: string) => {
    const result = await User.findByIdAndUpdate(
        id,
        {
            isDeleted: true
        },
        {
            new: true,
            runValidators: true
        }
    )
    return result;
}

export const userServices = {
    createUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser
}