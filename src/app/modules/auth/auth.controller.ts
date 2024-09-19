import catchAsync from "../../utils/catchAsync";
import { authServices } from "./auth.service";


const login = catchAsync(async (req, res) => {
    const result = await authServices.login(req.body);
    res.status(200).json({
        success: true,
        status: 200,
        message: 'User logged successfully!',
        data: result
    })
})


export const authControllers = {
    login
}