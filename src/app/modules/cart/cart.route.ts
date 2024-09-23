import { Router } from "express";
import { cartControllers } from "./cart.controller";


const router = Router();

router.get('/:id', cartControllers.getProducts)

router.post('/', cartControllers.addProduct)

router.put('/:id', cartControllers.updateProduct)

router.delete('/:id', cartControllers.deleteProduct)

export const cartRouters = router;

