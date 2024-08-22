import React, { useState } from 'react'
import appFirebase from '../../../credenciales'
import {getAuth,onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(appFirebase)

import Login from './login'
import Home from '../../../pages/Home'

function Firebase () {
    const [usuario, setUsuario]= useState(null)
    onAuthStateChanged(auth, (usuarioFirebase)=>{
        if (usuarioFirebase){
            setUsuario(usuarioFirebase)
        }
        else{
            setUsuario(null)
        }
    })

  return (
    <div>
        {usuario ? <Home correoUsuario = {usuario.email}/> : <Login/>}
    </div>
  )
}

export default Firebase