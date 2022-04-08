import express from 'express';
import homeRoute from './routes/home';
import productRoute from './routes/products';
import categoryRoute from './routes/category';
import authRoute from './routes/auth';
import mongoose from 'mongoose';
import { checkAuth } from './middlewares/checkAuth';
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json());
app.use(homeRoute);
app.use("/api",checkAuth, productRoute);
app.use("/api",categoryRoute);
app.use("/api",authRoute);

mongoose.connect('mongodb://localhost:27017/we16307');
// Bước 3: lắng nghe cổng thực thi
const port = 3001;
app.listen(port, () =>{
    console.log(`Server is running on ${port}`);
});