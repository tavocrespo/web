import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import "./Guardados.css";
import Header from '../../components/pinCard/header/header';


const Guardados = () => {
  const [savedImages,setSavedImages]=useState([]);
  const location = useLocation();
  const { imageSrc } = location.state || {};
  // if (!imageSrc) {
  //   return <div>No Hay Imagen Para Mostrar.</div>;
  // }
  useEffect(()=>{
    const images = JSON.parse(localStorage.getItem("savedimages")) || [];
  })
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <hr />
      <div className='guardado-container'>
        <h1 className='texto-guardados'>GUARDADOS</h1>
        <hr />
        <br />
        <img className='pines-guardados' src={imageSrc} alt="imagen guardada" style={{ maxWidth: "100%" }} />
      </div>
    </div>

  )
}

export default Guardados;