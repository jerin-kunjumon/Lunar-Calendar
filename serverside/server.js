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

// app.use(cors())
app.use(cors({credentials: true, origin: true}));
connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use(cookieParser())
app.use('/api/users', UserRoutes)

app.get('/',(req,res)=>res.send('server is ready'));

app.use(notFound)
app.use(errorHandler)
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
//     res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'content-type');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     next();
//   });
app.listen(port,()=>console.log(`server started at ${port}`))

