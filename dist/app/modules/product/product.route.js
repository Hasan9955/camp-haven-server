"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
const router = (0, express_1.Router)();
router.get('/', product_controller_1.productControllers.getAllProducts);
router.get('/topSoldProducts', product_controller_1.productControllers.getTopSoldProduct);
router.get('/recommendedProducts', product_controller_1.productControllers.getRecommendedProduct);
router.get('/:id', product_controller_1.productControllers.getSingleProduct);
router.post('/', product_controller_1.productControllers.createProduct);
router.put('/:id', product_controller_1.productControllers.updateProduct);
router.delete('/:id', product_controller_1.productControllers.deleteProduct);
exports.productRoutes = router;
