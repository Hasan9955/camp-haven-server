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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const product_service_1 = require("./product.service");
const createProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const result = yield product_service_1.productServices.createProduct(payload);
    res.status(200).json({
        success: true,
        status: 200,
        message: 'Product Created successfully!',
        data: result
    });
}));
const getAllProducts = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_service_1.productServices.getAllProducts(req.query);
    res.status(200).json({
        success: true,
        status: 200,
        message: 'Products retrieved successfully!',
        data: result
    });
}));
const getTopSoldProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_service_1.productServices.getTopSoldProduct();
    res.status(200).json({
        success: true,
        status: 200,
        message: 'Top sold Products retrieved successfully!',
        data: result
    });
}));
const getRecommendedProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_service_1.productServices.getRecommendedProduct();
    res.status(200).json({
        success: true,
        status: 200,
        message: 'Recommended Products retrieved successfully!',
        data: result
    });
}));
const getSingleProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_service_1.productServices.getSingleProduct(req.params.id);
    res.status(200).json({
        success: true,
        status: 200,
        message: 'Product retrieved successfully!',
        data: result
    });
}));
const updateProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const payload = req.body;
    const result = yield product_service_1.productServices.updateProduct(id, payload);
    res.status(200).json({
        success: true,
        status: 200,
        message: 'Product updated successfully!',
        data: result
    });
}));
const deleteProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_service_1.productServices.deleteProduct(req.params.id);
    res.status(200).json({
        success: true,
        status: 200,
        message: 'Product deleted successfully!',
        data: result
    });
}));
exports.productControllers = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    getTopSoldProduct,
    getRecommendedProduct,
    updateProduct,
    deleteProduct
};
