import jwt from 'jsonwebtoken';
const createJWT=(id)=>{
    return jwt.sign({id}, 'codingdojo', {expiresIn:"30d"})
}




export default createJWT;