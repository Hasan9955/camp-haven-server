import AppError from "../../error/AppError";
import { Cart } from "../cart/cart.model";
import { Product } from "../product/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";


const createOrder = async (payload: TOrder) => {

    const updateProduct = await Product.findByIdAndUpdate(payload.productId,
        {
            $inc: {
                quantity: -payload.quantity,
                sold: payload.quantity
            }
        },
        {
            runValidators: true,
            new: true
        }
    )
    if (!updateProduct) {
        throw new AppError(400, 'Product not updated')
    }
    if(payload?.cartId){
        await Cart.findByIdAndDelete(payload?.cartId)
    }
    const result = await Order.create(payload)
    return result
}



export const orderServices = {
    createOrder
}