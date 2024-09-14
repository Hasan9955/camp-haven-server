import { Router } from "express";
import { productControllers } from "./product.controller";



const router = Router();


router.get('/', productControllers.getAllProducts)

router.get('/:id', productControllers.getSingleProduct)

router.post('/', productControllers.createProduct)

router.put('/:id', productControllers.updateProduct)

router.delete('/:id', productControllers.deleteProduct)

export const productRoutes = router;

