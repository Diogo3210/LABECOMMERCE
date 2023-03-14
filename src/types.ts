export type Tuser = {
    id: string,
    email: string,
    password: string
}

export type Tproduct = {
    id: string,
    name: string,
    price: number,
    category: CATEGORIES
}

export type Tpurchase = {
    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number
}


//Feedback Typescript II
// Exercicio 1

export enum CATEGORIES {
    GAMES = "Games",
    NOTEBOOKS = "Notebooks",
    CELLPHONES = "Cellphones"
}
