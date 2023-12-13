import { useParams} from 'react-router-dom'
import { useEffect} from 'react';
import axios from 'axios';


const Confirm = () => {
  const params = useParams();
  const { id } = params;

  useEffect(()=>{
    const confirmAccount = async ()=>{
      try {
        const url= `http://localhost:8080/api/trainer/confirmar/${id}`
        const { data } = await axios(url)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    confirmAccount();
  },[])
 




  return (
    <>
    <div>
          <h1 className="text-blue-950 font-black text-4xl">
            Confirma tu cuenta y administra tus socios
          </h1>
      
        </div>

        <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        
          
        </div>
    </>
  )
}

export default Confirm 