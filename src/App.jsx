import React, { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home.jsx';
import Crear from './pages/Crear/Crear.jsx';
import UserDropdown from './components/pinCard/userDropdown/userDropdown.jsx';
import Header from './components/pinCard/header/header.jsx';
import Login from './components/pinCard/login/login.jsx';
import {getAuth,onAuthStateChanged} from "firebase/auth"
const auth = getAuth(appFirebase)
import appFirebase from '../src/credenciales.js'
import MisPines from './pages/Pines/Pines.jsx';
import Guardados from './pages/Guardados/Guardados.jsx';


function App() {
  const [usuario, setUsuario]= useState(null)
  onAuthStateChanged(auth,(usuarioFirebase)=> {
    if (usuarioFirebase) {
        setUsuario(usuarioFirebase)
    }
    else
    {
      setUsuario(null)
    }
  } )

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />}  />
        <Route path="/Guardados" element={<Guardados />} />
        <Route path="/Crear" element={<Crear />}/>
        <Route path="/Pines" element={<MisPines />} />
        <Route path='/' element= {<UserDropdown />}/>
        <Route path='/' element= {<Header />} />
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;



