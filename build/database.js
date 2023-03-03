"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchases = exports.products = exports.users = void 0;
exports.users = [
    {
        id: "1",
        email: "teste@email.com",
        password: "123456"
    },
    {
        id: "2",
        email: "teste2@email.com",
        password: "123456"
    }
];
exports.products = [
    {
        id: "1",
        name: "playstation 4",
        price: 2000,
        category: "video-game"
    },
    {
        id: "2",
        name: "playstation 5",
        price: 5000,
        category: "video-game"
    }
];
exports.purchases = [
    {
        userId: "1",
        productId: "2",
        quantity: 1,
        totalPrice: 5000
    },
    {
        userId: "2",
        productId: "1",
        quantity: 2,
        totalPrice: 4000
    }
];
//# sourceMappingURL=database.js.map