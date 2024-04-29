import express from "express";
import dotenv from  'dotenv';
import cookieParser from "cookie-parser";
import { notFound,errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js"
import cors from 'cors'
import UserRoutes from './routes/userRoutes.js'
dotenv.config();


const app = express()
const port = process.env.PORT || 3000 ;

app.use(cors())
connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use(cookieParser())
app.use('/api/users', UserRoutes)

app.get('/',(req,res)=>res.send('server is ready'));

app.use(notFound)
app.use(errorHandler)
app.listen(port,()=>console.log(`server started at ${port}`))

