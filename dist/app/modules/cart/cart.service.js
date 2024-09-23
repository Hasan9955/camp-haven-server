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
exports.cartServices = void 0;
const cart_model_1 = require("./cart.model");
const getProducts = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cart_model_1.Cart.find({
        userId: id
    })
        .populate('userId')
        .populate('productId');
    if (result) {
        const mappedProducts = result.filter((product) => product.productId != null);
        return mappedProducts;
    }
});
const addProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isAlreadyProductAdded = yield cart_model_1.Cart.findOneAndUpdate({
        userId: payload.userId,
        productId: payload.productId
    }, {
        $inc: { quantity: payload.quantity }
    }, {
        new: true,
        runValidators: true
    });
    if (!isAlreadyProductAdded) {
        const result = yield cart_model_1.Cart.create(payload);
        return result;
    }
    return isAlreadyProductAdded;
});
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    const result = yield cart_model_1.Cart.deleteOne({ _id: id });
    return result;
});
const updateProduct = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cart_model_1.Cart.findByIdAndUpdate(id, {
        quantity: payload.quantity
    }, {
        new: true,
        runValidators: true
    });
    return result;
});
exports.cartServices = {
    addProduct,
    deleteProduct,
    updateProduct,
    getProducts
};
