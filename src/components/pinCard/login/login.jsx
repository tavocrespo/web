import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import "./login.css"
import BgVideo from "./video-background.mp4"
import logopinterest from "./logopinterest.png"
import { Link } from 'react-router-dom'
import Home from '../../../pages/Home/Home'
import appFirebase from '../../../credenciales'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(appFirebase)
import { useForm } from 'react-hook-form'


function Login() {
  const { register, handdleSubmit } = useForm
  const [registrando, setRegistrando] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const toggleForm = () => {
    setRegistrando(!registrando);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const functionAuth = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;
    console.log(correo)

    //registro

    if (registrando) {

      if (password.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres');
        return;
      }
      if (password !== confirmPassword) {
        alert('las contraseñas no coinciden' + error.message);
      }

      try {
        await createUserWithEmailAndPassword(auth, correo, contraseña)
        navigate('/Home');

      }
      catch (error) {
        alert('ERROR EN EL REGISTRO:' + error.message);
      }
    }

    else {

      try {
        await signInWithEmailAndPassword(auth, correo, contraseña)
        navigate('/Home');
      } catch (error) {
        alert('INVALIDO');
      }

    }
  }

  return (
    <div>
      <div className='landingpage'>

        <video src={BgVideo} autoPlay muted loop className='video-bg' />
        <div className='bgcapa'></div>

        <div className='container-login'>

          <div className='texto' >
            <h1>Sign up to <br />get your <br />ideas
            </h1>
          </div>

          <div className='login'>
            <img className='logo-login' src={logopinterest} alt="" />
            <div className='encabezado-login'>
              <h1 className='welcome'>Welcome to Pinterest</h1>
              <p className='find'>Find new ideas to try</p>
            </div>

            <div className='formulario-login'>
              <form onSubmit={functionAuth}>
                <br />

                <input
                  className='input-email'
                  type='email' placeholder='Email'
                  id='email'
                  onChange={(e) => setEmail(e.target.value)} required value={email}
                />

                <br />
                <br />

                <input
                  className='input-password'
                  type='password'
                  placeholder='Create Password'
                  id='password' onChange={(e) => setPassword(e.target.value)} required value={password}
                />
                <br />

                {registrando && (
                  <div className='confirm-password'>
                    
                    <br />
                    <input type="password"
                      className='input-password'
                      placeholder='Confirm Password'
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)} required />
                    <br />
                    <br />

                    <input
                      className='input-age'
                      type="date"
                      placeholder='Age'
                    />
                  </div>


                )}

                <br />
                <button id='boton-login' type='submit'>
                  {/* <Link to={'/Home'} > */}
                  {registrando ? "Registrate" : "Continue"}
                  {/* </Link> */}
                </button>
              </form>
              <h1 className='registrate'>
                {/* {registrando ? "Si ya tienes cuenta, " : "No tienes cuenta?"} */}
                <br />
                <button onClick={toggleForm}>
                  {registrando ? "Si ya tienes cuenta, Continue" : "No Tienes Cuenta? Registrate"}
                </button>
                {/* <button onClick={() => setRegistrando(!registrando)}>
                  {registrando ? "Continue" : "Registrate"}
                </button> */}

              </h1>

            </div>

          </div>

        </div>


      </div>
      

    </div>
  )
}

export default Login