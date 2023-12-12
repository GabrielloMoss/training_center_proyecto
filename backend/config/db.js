import mongoose from "mongoose";


const connectDb = async ()=>{
    try{
        const db = await mongoose.connect('mongodb://127.0.0.1:27017/gym')
        console.log('conectado a la base de datos')
    } catch(error){

        console.log(`error: ${error.message}`);
        process.exit(1);
    }
}


export default connectDb;