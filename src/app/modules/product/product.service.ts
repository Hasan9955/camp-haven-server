import { FilterQuery } from "mongoose";
import { IProduct } from "./product.interface";
import { Product } from "./product.model"
interface ProductQuery {
    search?: string;
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    sortByPrice?: 'asc' | 'desc';
}


const createProduct = async (payload: IProduct) => {
    const result = await Product.create(payload);
    return result;
}


const getAllProducts = async (query: ProductQuery) => {


    //Filter Functionality
    const filter: FilterQuery<IProduct> = {};

    // Search by name or description if provided
    if (query.search) {
        filter.$or = [
            { name: { $regex: query.search, $options: 'i' } }, 
            { description: { $regex: query.search, $options: 'i' } } 
        ];
    }
    
    // Filter by category if provided
    if (query.category) {
        filter.category = query.category;
    }

    // Filter by price range if provided
    if (query.minPrice || query.maxPrice) {
        filter.price = {};
        if (query.minPrice) {
            filter.price.$gte = query.minPrice;
        }
        if (query.maxPrice) {
            filter.price.$lte = query.maxPrice;
        }
    }
    
    
    // Sort functionality
    let sort: Record<string, 1 | -1> = {};
    if (query.sortByPrice) {
        sort.price = query.sortByPrice === 'asc' ? 1 : -1;
    }

    console.log(filter); 
    const result = await Product.find(filter).sort(sort);
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
            status: 'unavailable'

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