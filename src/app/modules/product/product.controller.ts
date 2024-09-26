import catchAsync from "../../utils/catchAsync";
import { productServices } from "./product.service";



const createProduct = catchAsync(async (req, res) => {
    const payload = req.body;
    const result = await productServices.createProduct(payload)
    res.status(200).json({
        success: true,
        status: 200,
        message: 'Product Created successfully!',
        data: result
    })
})
const getAllProducts = catchAsync(async (req, res) => {
    const result = await productServices.getAllProducts(req.query)
    res.status(200).json({
        success: true,
        status: 200,
        message: 'Products retrieved successfully!',
        data: result
    })
})

const getTopSoldProduct = catchAsync(async(req, res) => {
    const result = await productServices.getTopSoldProduct();
    res.status(200).json({
        success: true,
        status: 200,
        message: 'Top sold Products retrieved successfully!',
        data: result
    })
})

const getRecommendedProduct = catchAsync(async(req, res) => {
    const result = await productServices.getRecommendedProduct();
    res.status(200).json({
        success: true,
        status: 200,
        message: 'Recommended Products retrieved successfully!',
        data: result
    })
})
const getSingleProduct = catchAsync(async (req, res) => {
    const result = await productServices.getSingleProduct(req.params.id)
    res.status(200).json({
        success: true,
        status: 200,
        message: 'Product retrieved successfully!',
        data: result
    })
})
const updateProduct = catchAsync(async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    const result = await productServices.updateProduct(id, payload)
    res.status(200).json({
        success: true,
        status: 200,
        message: 'Product updated successfully!',
        data: result
    })
})
const deleteProduct = catchAsync(async (req, res) => {
    const result = await productServices.deleteProduct(req.params.id)
    res.status(200).json({
        success: true,
        status: 200,
        message: 'Product deleted successfully!',
        data: result
    })
})


export const productControllers = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    getTopSoldProduct,
    getRecommendedProduct,
    updateProduct,
    deleteProduct
}