import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div>
          <h1 className="text-blue-950 font-black text-4xl">
            Inicia sesión y administra socios
          </h1>
      
      </div>

      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
          <form>
            <div className="my-5">
              <label className="uppercase text-gray-600 block text-xl font-bold">email</label>
              <input type="text" placeholder="email de registro"
              className="border w-full p-3 mt-3 bg-gray-300 rounded-xl"/>
            </div>
            <div  className="my-5">
              <label className="uppercase text-gray-600 block text-xl font-bold">password</label>
              <input type="email" placeholder="ingrese contraseña"
              className="border w-full p-3 mt-3 bg-gray-300 rounded-xl"/>
            </div>

            <input type="submit" value="Iniciar Sesión"
                className="bg-indigo-850 w-full py-3 px-10 rounded-xl
               text-white uppercase font-bold mt-5 hover:cursor-pointer
               hover: bg-indigo-950 md:w-auto "
            />
              
          </form>
            <nav className="mt-10 lg:flex lg:justify-between">
              <Link to="/registrar" className="block text-center my-5 text-blue-500">No tienes una cuenta, registrate aquí</Link>
              <Link to="/olvide-password" className="block text-center my-5 text-blue-500"></Link>
            </nav>

      </div>
    </>
  )
}

export default Login