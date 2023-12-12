import jwt from "jsonwebtoken"
import Trainer from "../models/trainerModel.js";


const checkAutheticate= async(req, res, next)=>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        console.log('hay token bearer')
    }
    try{
        token= req.headers.authorization.split(' ')[1];
        const decoded =jwt.verify(token, 'codingdojo');
        req.trainer= await Trainer.findById(decoded.id).select("-password -token -confirmado")
        
        return next();
    } catch (error){
        const e = new Error('token no valido')
        return res.status(403).json({msg: e.message})
    }
    if(!token){
        const error = new Error('token no valido o inexiste')
        res.status(403).json({msg: error.message})
    }
    next();
};

export default checkAutheticate;