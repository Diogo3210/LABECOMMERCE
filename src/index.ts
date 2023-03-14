import { users, products, purchases, createUser, getAllUsers, createProduct, getAllProducts, getProductById, queryProductByName, getAllPurchaseFromUserId } from './database'
import { CATEGORIES } from "./types"


// EXERCICIO 2 - FEEDBACK TYPESCRIPT II
createUser("001", "teste@email.com", "senha@1234")
getAllUsers()

createProduct("004", "controle ps4", 385, CATEGORIES.GAMES)
getAllProducts()
getProductById("002")

// EXERCICIO 3 - FEEDBACK TYPESCRIPT II
queryProductByName("Play")
getAllPurchaseFromUserId("001")