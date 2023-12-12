import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import createId from "../helpers/createId.js";

const TrainerSchema= new mongoose.Schema({
    
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true
    },
    telefono:{
        type: String,
        default: null,
        trim: true
    },
   
    token:{
        type: String,
        default: createId()
    },

    confirmado:{
        type: Boolean,
        default:false
    }
})
TrainerSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }
   
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})
TrainerSchema.methods.checkPass = async function (passForm){
    return await bcrypt.compare(passForm,this.password);
}

const Trainer = mongoose.model('trainers', TrainerSchema)
export default Trainer;