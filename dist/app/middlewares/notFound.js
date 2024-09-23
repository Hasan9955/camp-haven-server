"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFound = (req, res, next) => {
    res.status(404).json({
        success: false,
        status: 404,
        message: 'Api not found!',
        error: ''
    });
};
exports.default = notFound;
