import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const connection_string = process.env.MONGO_CONNECT
const connectDB = async () =>{
try{
    const conn = await mongoose.connect(connection_string);
    console.log(`MongoDB connected ${conn.connection.host}`);
} catch(error){
    console.error(`Error: ${error.message}`);
    process.exit(1);
}
}

export default connectDB