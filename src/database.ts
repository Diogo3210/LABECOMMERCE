import { Tuser, Tproduct, Tpurchase, CATEGORIES } from "./types"


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
        id: "001",
        name: "Playstation 4",
        price: 2000,
        category: CATEGORIES.GAMES
    },
    {
        id: "002",
        name: "Playstation 5",
        price: 5000,
        category: CATEGORIES.GAMES
    },
    {
        id: "003",
        name: "POCO m5",
        price: 2000,
        category: CATEGORIES.CELLPHONES
    }
]

export const purchases: Tpurchase[] = [
    {
        userId: "001",
        productId: "002",
        quantity: 1,
        totalPrice: 5000
    },
    {
        userId: "002",
        productId: "001",
        quantity: 2,
        totalPrice: 4000
    }
]

//Feedback Typescript II
// Exercicio 2 - User

export const createUser = (id: string, email: string, password: string) => {
    const newUser = { id, email, password }
    users.push(newUser)
    console.log("Cadastro Realizado com sucesso")

}

export const getAllUsers = () => {
    console.log(users)
}

// Exercicio 2 - Product

export const createProduct = (id: string, name: string, price: number, category: CATEGORIES) => {
    const newProduct: Tproduct = { id, name, price, category }
    products.push(newProduct)
    console.log("Produto criado com sucesso")
}

export const getAllProducts = () => {
    console.log(products)
}

export const getProductById = (id: string) => {
    products.filter((product) => {
        if (product.id === id) {
            let productSearch = product
            console.log(productSearch)
        }
    })
}


// Exercicio 3 - Product

export const queryProductByName = (q: string) => {
    products.filter((product) => {
        if (product.name.includes(q)) {
            let productSearch = product
            console.table(productSearch)
        }
    })
}


// Exercicio 3 - Purchase

export const createPurchase = (userId: string, productId: string, quantity: number, totalPrice: number) => {
    let newPurchase = { userId, productId, quantity, totalPrice }
    purchases.push(newPurchase)
}

export const getAllPurchaseFromUserId = (userIdToSearch: string) => {
    purchases.filter((purchase) => {
        if (purchase.userId === userIdToSearch) {
            let purchaseSearch = purchase
            console.log(purchase)
        }
    })
}