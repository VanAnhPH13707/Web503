import express from "express";
import { createProduct, deleteProduct, listProduct, listProductDetail, updateProduct } from "../controllers/products";
import { userById } from "../controllers/user";
import { isAdmin, isAuth, requiredSignin } from "../middlewares/checkAuth";

const route = express.Router();

route.get('/products', listProduct);
route.get('/products/:id', listProductDetail);
route.post('/products/:userId',requiredSignin,isAuth,isAdmin ,createProduct)
route.delete('/products/:id', deleteProduct)
route.put('/products/:id', updateProduct)

route.param("userId",userById)
export default route;