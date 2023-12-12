import Trainer from "../models/trainerModel.js";
import jwt from 'jsonwebtoken';
import createJWT from "../helpers/createJWT.js";
import createId from "../helpers/createId.js";
import emailRegister from '../helpers/emailRegister.js'


const register = async(req,res)=>{
    const {email, name} = req.body;
    console.log(req.body)

    //duplicados
    const duplicateTrainer = await Trainer.findOne({email})
    if(duplicateTrainer){
        const error= new Error('usuario ya existe')
        return res.status(400).json({msg: error.message})
    }
    try{
        const trainer = new Trainer(req.body)
        const trainerSave = await trainer.save();

        //enviar emai, una vez se alcena user y se guarda
        emailRegister({
            email,
            name,
            token:trainerSave.token,
        });
        res.json(trainerSave)

    } catch (error) {
        console.log(error)
    }

};

const profile = (req,res)=>{
    const { trainer } = req
    res.json({ perfil:trainer })
}

const confirm = async(req,res)=>{
    const { token } = req.params;
    const userConfirm = await Trainer.findOne({ token })
    if(!userConfirm){
        const error = new Error('Token no valido')
        return res.status(404).json({msg: error.message})
      }
      try{
        userConfirm.token = null;
        userConfirm.confirmado = true;
        await userConfirm.save();
        res.json({msg:'usuario confirmado correctamente'})
      } catch(error){
        console.log(error)
      }
        

}
const authenticate = async (req, res)=>{
    const {email, password}= req.body
    //comprobar si usuario existe
    const user = await Trainer.findOne({email});
    if (!user){
        const error = new Error('usuario no existe')
        return res.status(404).json({msg: error.message})
    } 
    //comprobar usuario confirmado
    if(!user.confirmado){
        const error = new Error('tu cuenta no ha sido confirmada')
        return res.status(403).json({msg: error.message})
    }
    // revisar pass

    if(await user.checkPass(password)){
        console.log(user)

        res.json({ token:createJWT(user.id) })
    }else{
        const error = new Error('pass incorrecto')
        return res.status(403).json({msg: error.message})
        
    }
    
};

const forgotPass = async(req,res)=>{
    const { email } = req.body;
    console.log(email)
     const trainerExists = await Trainer.findOne({email})
    if(!trainerExists){
        const error = new Error('El usuario no existe')
        return res.status(400).json({msg:error.message})
    }
    try { 
        trainerExists.token = createId()
        await trainerExists.save()
        res.json({msg:'Hemos enviado un mail con las instrucciones'})
        
    } catch (error) {
        console.log(error)
    } 
}

const checkToken = async(req,res)=>{
    const { token } = req.params
    const validToken = await Trainer.findOne({ token })
        if(validToken){
        //el token es valido
            res.json({msg: 'token valido el usuario existe'})
        } else{
            const error = new Error('token no válido')
            return res.status(400).json({msg: error.message})
    } 
}
const newPass = async (req, res)=>{
    const { token } = req.params;
    const { password } = req.body;

    const trainer = await Trainer.findOne({ token });
        if(!trainer){
            const error = new Error('Hubo un error')
            return res.status(400).json({msg: error.message})
    }
        try {
            trainer.token = null;
            trainer.password = password;
            await trainer.save();
            res.json({msg:'password modificado con éxito'})
            console.log(trainer)
            
        } catch (error) {
        console.log(error)
        
    }
 

}


export{register, profile, confirm, authenticate, forgotPass, checkToken, newPass}