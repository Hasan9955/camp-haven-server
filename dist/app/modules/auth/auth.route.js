"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = require("express");
const user_controller_1 = require("../User/user.controller");
const auth_controller_1 = require("./auth.controller");
const router = (0, express_1.Router)();
router.post('/signUp', user_controller_1.userControllers.createUser);
router.post('/login', auth_controller_1.authControllers.login);
exports.authRoutes = router;
