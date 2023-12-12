import { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../components/Alert";
import axios from 'axios'


const Register = () => {

    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [repitPassword, setRepitPassword]= useState("");
    const [alerta, setAlerta]= useState({});

    
    
    const handleSubmit = async e =>{
        e.preventDefault();
        if([name, email,password,repitPassword].includes('')){
            setAlerta({msg:"No puede dejar campos vacíos", error: true})
            return
        }
        if(password !== repitPassword){
            setAlerta({msg:"La contraseña debe coincidir", error: true})
            return
        }
        
        if(password.length < 6){
            setAlerta({msg:"La contraseña debe tener mínimo 6 caracteres ", error: true})
            return
        }


        setAlerta({})
        //crea usuario en api
        try {
            const url = "http://localhost:8080/api/trainer"
            await axios.post(url, {name, email, password})
            setAlerta({msg: 'creado correctamente, revisa tu email para validar tu cuenta', error:false})
        } catch (error) {
            setAlerta({msg: error.response.data.msg, error:true})
        }
    }
    const{msg}= alerta;

    return (
    <>
       <div>
          <h1 className="text-blue-950 font-black text-4xl">
            Crea tu cuenta y administra tus socios
          </h1>
      
        </div>

        <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        

            { msg && <Alert alerta={alerta}/>}

            <form onSubmit={handleSubmit}>
            
            <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">Nombre</label>
                <input type="text" placeholder="ingresa tu nombre"
                className="border w-full p-3 mt-3 bg-gray-300 rounded-xl"
                value={name} onChange={e=> setName(e.target.value)}/>
                </div>

                <div className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">email</label>
                <input type="email" placeholder="ingresa tu email"
                className="border w-full p-3 mt-3 bg-gray-300 rounded-xl"
                value={email} onChange={e=> setEmail(e.target.value)}/>
                </div>

                <div  className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">password</label>
                <input type="password" placeholder="ingresa tu password"
                className="border w-full p-3 mt-3 bg-gray-300 rounded-xl"
                value={password} onChange={e=> setPassword(e.target.value)}/>
                </div>

                <div  className="my-5">
                <label className="uppercase text-gray-600 block text-xl font-bold">repetir password</label>
                <input type="password" placeholder="repite tu password"
                className="border w-full p-3 mt-3 bg-gray-300 rounded-xl"
                value={repitPassword} onChange={e=> setRepitPassword(e.target.value)}/>
                </div>

                <input type="submit" value="Iniciar Sesión"
                    className="bg-indigo-850 w-full py-3 px-10 rounded-xl
                    text-white uppercase font-bold mt-5 hover:cursor-pointer
                    hover: bg-indigo-950 md:w-auto "
                />
              
            </form>
            <nav className="mt-10 lg:flex lg:justify-between">
              <Link to="/" className="block text-center my-5 text-blue-500">Ya tienes una cuenta?, inica sesión aquí</Link>
              <Link to="/olvide-password" className="block text-center my-5 text-blue-500">Olvidé mi contraseña</Link>
            </nav>
        </div>
    </>
  )
}

export default Register