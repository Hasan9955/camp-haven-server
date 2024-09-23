"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applicationRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/User/user.route");
const product_route_1 = require("../modules/product/product.route");
const auth_route_1 = require("../modules/auth/auth.route");
const cart_route_1 = require("../modules/cart/cart.route");
const router = express_1.default.Router();
const allRoutes = [
    {
        path: '/users',
        route: user_route_1.userRoutes
    },
    {
        path: '/products',
        route: product_route_1.productRoutes
    },
    {
        path: '/auth',
        route: auth_route_1.authRoutes
    },
    {
        path: '/cart',
        route: cart_route_1.cartRouters
    }
];
allRoutes.forEach((route) => router.use(route.path, route.route));
exports.applicationRoutes = router;
