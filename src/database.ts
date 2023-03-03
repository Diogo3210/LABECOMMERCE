import { Tuser, Tproduct, Tpurchase } from "./types"


export const users: Tuser[] = [
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
]

export const products: Tproduct[] = [
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
]

export const purchases: Tpurchase[] = [
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
]
