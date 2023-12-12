
import Member from "../models/memberModel.js"

const createMember = async(req,res)=>{
    const member = new Member(req.body)
    member.trainer=req.trainer._id

    try {
        const memberSave= await member.save();
        res.json(memberSave)
    } catch (error) {
        console.log(error)
    }
    
}
const getMembers = async(req,res)=>{
    const members = await Member.find().where('trainer').equals(req.trainer);
    res.json(members)
}

const getOneMember= async(req, res)=>{
    const { id } = req.params;
    const member = await Member.findById(id);

    if(!member){
        res.status(404).json({msg:'no encontrado'})
    }

    if(member.trainer._id.toString() !== req.trainer._id.toString()){
        return res.json({msg: 'no tiene autorización para realizar esta acción'})
    }
        res.json(member)
}

const updateMember= async(req, res)=>{
    const { id } = req.params;
    const member = await Member.findById(id);

    if(!member){
        res.status(404).json({msg:'no encontrado'})
    }

    if(member.trainer._id.toString() !== req.trainer._id.toString()){
        return res.json({msg: 'no tiene autorización para realizar esta acción'})
    }
    //actualizar miembro
    member.nombre= req.body.nombre || member.nombre;
    member.edad= req.body.edad || member.edad;
    member.peso= req.body.peso || member.peso;
    member.altura= req.body.altura || member.altura;
    member.observaciones= req.body.observaciones || member.observaciones;
    member.control= req.body.control || member.control;
   

    try {
        const memberUpdated = await member.save();
        res.json(memberUpdated)
    } catch (error) {
        console.log(error)
        
    }

}
const deleteMember= async(req, res)=>{
    const { id } = req.params;
    const member = await Member.findById(id);

    if(!member){
        res.status(404).json({msg:'no encontrado'})
    }

    if(member.trainer._id.toString() !== req.trainer._id.toString()){
        return res.json({msg: 'no tiene autorización para realizar esta acción'})
    }

    try {
        await member.deleteOne();
        res.json({msg:'eliminado correctamente'})
    } catch (error) {
        
        console.log(error)
    }

}

export {createMember, getMembers, getOneMember, updateMember, deleteMember}