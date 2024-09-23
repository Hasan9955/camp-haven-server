"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: 0,
        minLength: [6, 'password should be at last 6 character']
    },
    photo: {
        type: String,
        default: 'https://i.ibb.co.com/5j6sv2R/anonymous2.webp'
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
exports.User = (0, mongoose_1.model)('User', userSchema);
