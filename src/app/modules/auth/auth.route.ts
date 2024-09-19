import { Router } from "express";
import { userControllers } from "../User/user.controller";
import { authControllers } from "./auth.controller";


const router = Router();

router.post('/signUp', userControllers.createUser)

router.post('/login', authControllers.login)


export const authRoutes = router;