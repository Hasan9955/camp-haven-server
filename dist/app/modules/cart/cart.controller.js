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
exports.cartControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const cart_service_1 = require("./cart.service");
const getProducts = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield cart_service_1.cartServices.getProducts(id);
    res.status(200).json({
        success: true,
        status: 200,
        message: 'Products retrieved successfully!',
        data: result
    });
}));
const addProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cart_service_1.cartServices.addProduct(req.body);
    res.status(200).json({
        success: true,
        status: 200,
        message: 'Product added successfully!',
        data: result
    });
}));
const deleteProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cart_service_1.cartServices.deleteProduct(req.params.id);
    res.status(200).json({
        success: true,
        status: 200,
        message: 'Product deleted successfully!',
        data: result
    });
}));
const updateProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const payload = req.body;
    const result = yield cart_service_1.cartServices.updateProduct(id, payload);
    res.status(200).json({
        success: true,
        status: 200,
        message: 'Item updated successfully!',
        data: result
    });
}));
exports.cartControllers = {
    addProduct,
    deleteProduct,
    updateProduct,
    getProducts
};
