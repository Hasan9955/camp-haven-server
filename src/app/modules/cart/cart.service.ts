import { TCart } from "./cart.interface";
import { Cart } from "./cart.model";


const getProducts = async (payload: Partial<TCart>) => {
    const result = await Cart.find({
        userId: payload.userId
    })
    return result;
}
const addProduct = async (payload: TCart) => {
    const isAlreadyProductAdded = await Cart.findOneAndUpdate({
        userId: payload.userId,
        productId: payload.productId
    },
        {
            $inc: { quantity: payload.quantity }
        },
        {
            new: true,
            runValidators: true
        })
    console.log(isAlreadyProductAdded);


}

const deleteProduct = async (id: string) => {
    const result = await Cart.findByIdAndDelete(id)
    return result;
}

const updateProduct = async (id: string, payload: Partial<TCart>) => {
    const result = await Cart.findByIdAndUpdate(id,
        {
            quantity: payload.quantity
        },
        {
            new: true,
            runValidators: true
        }
    )
    return result;
}

export const cartServices = {
    addProduct,
    deleteProduct,
    updateProduct,
    getProducts
}