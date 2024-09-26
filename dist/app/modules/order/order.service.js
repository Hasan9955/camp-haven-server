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
exports.orderServices = void 0;
const AppError_1 = __importDefault(require("../../error/AppError"));
const cart_model_1 = require("../cart/cart.model");
const product_model_1 = require("../product/product.model");
const order_model_1 = require("./order.model");
const createOrder = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const updateProduct = yield product_model_1.Product.findByIdAndUpdate(payload.productId, {
        $inc: {
            quantity: -payload.quantity,
            sold: payload.quantity
        }
    }, {
        runValidators: true,
        new: true
    });
    if (!updateProduct) {
        throw new AppError_1.default(400, 'Product not updated');
    }
    if (payload === null || payload === void 0 ? void 0 : payload.cartId) {
        yield cart_model_1.Cart.findByIdAndDelete(payload === null || payload === void 0 ? void 0 : payload.cartId);
    }
    const result = yield order_model_1.Order.create(payload);
    return result;
});
exports.orderServices = {
    createOrder
};
