import { IProduct } from "./product.interface";
import { Product } from "./product.model"



const createProduct = async (payload: IProduct) => {
    const result = await Product.create(payload);
    return result;
}
const getAllProducts = async () => {
    const result = await Product.find();
    return result;
}
const getSingleProduct = async (id: string) => {
    const result = await Product.findById(id);
    return result;
}
const updateProduct = async (id: string, payload: Partial<IProduct>) => {
    const result = await Product.findByIdAndUpdate(
        id,
        payload,
        {
            new: true,
            runValidators: true
        }
    )
    return result;
}
const deleteProduct = async (id: string) => {
    const result = await Product.findByIdAndUpdate(
        id,
        {
            isDeleted: true,

        },
        {
            new: true,
            runValidators: true
        }
    )
    return result;
}


export const productServices = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct
}