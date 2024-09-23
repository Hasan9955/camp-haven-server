import { IProduct } from "../product/product.interface";
import { TCart } from "./cart.interface";
import { Cart } from "./cart.model";


const getProducts = async (id: string) => {
    const result = await Cart.find({
        userId: id
    })
        .populate('userId')
        .populate('productId')
    if (result) {
        const mappedProducts = result.filter((product) => product.productId != null) 
        return mappedProducts;
    }
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
    if (!isAlreadyProductAdded) {
        const result = await Cart.create(payload)
        return result;
    }
    return isAlreadyProductAdded;

}

const deleteProduct = async (id: string) => {
    console.log(id);
    const result = await Cart.deleteOne({ _id: id })
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