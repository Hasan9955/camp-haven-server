import catchAsync from "../../utils/catchAsync";
import { cartServices } from "./cart.service";

const getProducts = catchAsync(async(req, res) => {
    const result = await cartServices.getProducts(req.body)
    res.status(200).json({
        success: true,
        status: 200,
        message: 'Products retrieved successfully!',
        data: result
    })
})
const addProduct = catchAsync(async(req, res) => {
    const result = await cartServices.addProduct(req.body);
    res.status(200).json({
        success: true,
        status: 200,
        message: 'Product added successfully!',
        data: result
    })
})

const deleteProduct = catchAsync(async (req, res) => {
    const result = await cartServices.deleteProduct(req.params.id)   
    res.status(200).json({
        success: true,
        status: 200,
        message: 'Product deleted successfully!',
        data: result
    })
})

const updateProduct = catchAsync(async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    const result = await cartServices.updateProduct(id, payload)
    res.status(200).json({
        success: true,
        status: 200,
        message: 'Product updated successfully!',
        data: result
    })

})


export const cartControllers = {
    addProduct,
    deleteProduct,
    updateProduct,
    getProducts
}