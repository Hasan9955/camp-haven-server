import catchAsync from "../../utils/catchAsync";
import { orderServices } from "./order.service";


const createOrder = catchAsync(async (req, res ) => {

    const result = await orderServices.createOrder(req.body)
    res.status(200).json({
        success: true,
        status: 200,
        message: 'Order placed successfully!',
        data: result
    })
})


export const orderControllers = {
    createOrder
}