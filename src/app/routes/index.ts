import express from 'express';
import { userRoutes } from '../modules/User/user.route';
import { productRoutes } from '../modules/product/product.route';
import { authRoutes } from '../modules/auth/auth.route';
import { cartRouters } from '../modules/cart/cart.route';

const router = express.Router();

const allRoutes = [
    {
        path: '/users',
        route:  userRoutes
    },
    {
        path: '/products',
        route: productRoutes
    },
    {
        path: '/auth',
        route: authRoutes
    },
    {
        path: '/cart',
        route: cartRouters
    }
]

allRoutes.forEach((route) => router.use(route.path, route.route))

export const applicationRoutes = router;