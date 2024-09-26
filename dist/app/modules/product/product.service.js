"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productServices = void 0;
const product_model_1 = require("./product.model");
const createProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.create(payload);
    return result;
});
const getAllProducts = (query) => __awaiter(void 0, void 0, void 0, function* () {
    //Filter Functionality
    const filter = {};
    // Search by name or description if provided
    if (query.filter) {
        filter.$or = [
            { name: { $regex: query.filter, $options: 'i' } },
            { description: { $regex: query.filter, $options: 'i' } }
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
    let sort = {};
    if (query.sort) {
        sort.price = query.sort === 'asc' ? 1 : -1;
    }
    const result = yield product_model_1.Product.find(filter).sort(sort);
    return result;
});
const getSingleProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findById(id);
    return result;
});
const getTopSoldProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.find().sort({ sold: -1 }).limit(4);
    return result;
});
const getRecommendedProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.find();
    return result;
});
const updateProduct = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true
    });
    return result;
});
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findByIdAndUpdate(id, {
        isDeleted: true,
        status: 'unavailable'
    }, {
        new: true,
        runValidators: true
    });
    return result;
});
exports.productServices = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    getTopSoldProduct,
    getRecommendedProduct,
    updateProduct,
    deleteProduct
};
