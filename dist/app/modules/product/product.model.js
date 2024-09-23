"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    sold: {
        type: Number,
        default: 0
    },
    price: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    quantity: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: 'available'
    }
}, {
    timestamps: true
});
productSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
productSchema.pre('findOne', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
exports.Product = (0, mongoose_1.model)('Product', productSchema);
