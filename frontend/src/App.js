import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import AuthLayout from './layout/AuthLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgetPass from './pages/ForgetPass';
import Confirm from './pages/Confirm';



function App() {
  return (
    <BrowserRouter>
      <Routes>


        <Route path='/' element={<AuthLayout/>}>
              <Route index element={<Login/>} />
              <Route path='registrar' element={<Register/>} />
              <Route path='olvide-password' element={<ForgetPass/>} />
              <Route path='confirmar/:id' element={<Confirm/>} />
        </Route>
        
           
            
            
      </Routes>
    </BrowserRouter>
  );
}

export default App;
