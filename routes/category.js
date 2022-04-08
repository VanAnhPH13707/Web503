import express from "express";
import { createCategory, deleteCategory, listCategory, listCategoryDetail, updateCategory } from "../controllers/category";
const route = express.Router();

route.get('/category', listCategory);
route.get('/category/:id', listCategoryDetail);
route.post('/category',createCategory)
route.delete('/category/:id', deleteCategory)
route.put('/category/:id', updateCategory)
export default route;