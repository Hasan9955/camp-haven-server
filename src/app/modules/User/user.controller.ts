import catchAsync from "../../utils/catchAsync";
import { userServices } from "./user.service";



const createUser = catchAsync(async (req, res) => {
    const payload = req.body;
    const result = await userServices.createUser(payload);
    res.status(200).json({
        success: true,
        status: 200,
        message: 'User Created successfully!',
        data: result
    })
})

const getAllUsers = catchAsync(async (req, res) => {
    const result = await userServices.getAllUsers();
    res.status(200).json({
        success: true,
        status: 200,
        message: 'Users retrieved successfully!',
        data: result
    })
})


const getSingleUser = catchAsync(async (req, res) => {
    const id = req.params.id;
    const result = await userServices.getSingleUser(id);
    res.status(200).json({
        success: true,
        status: 200,
        message: 'User retrieved successfully!',
        data: result
    })
})


const updateUser = catchAsync(async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    const result = await userServices.updateUser(id, payload)
    res.status(200).json({
        success: true,
        status: 200,
        message: 'User updated successfully!',
        data: result
    })
})


const deleteUser = catchAsync(async (req, res) => {
    const result = await userServices.deleteUser(req.params.id);
    res.status(200).json({
        success: true,
        status: 200,
        message: 'User deleted successfully!',
        data: result
    })
})


export const userControllers = {
    createUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser
}