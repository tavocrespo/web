import React from 'react'
import "./Pines.css";
import Header from '../../components/pinCard/header/header';
import UserDropdown from '../../components/pinCard/userDropdown/userDropdown';
import { Link } from 'react-router-dom';

function Pines() {
  const savedImage = localStorage.getItem("saved image");
  const savedImageUrl = localStorage.getItem("savedImage");
  console.log("imagen recuperada", savedImageUrl);
  const user = {
    avatar: "https://images.generated.photos/aAQ9aRMxbx28f3jkAx3ZDK3IJPw-T-INYhsWOKV0b7k/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzA0NjAyLmpwZw.jpg",
  };

  return (
    <div>
      <nav>
        <Header />
      </nav>
      <hr />
      <div>
        <div className='flex justify-center'>
          <img className='foto-perfil' src={user.avatar} alt="" />
        </div>
        <h1 className='texto-pines flex justify-center'>Mis Pines</h1>
        <hr />
      </div>
      <br />
      <div className='pin-container'>
        {savedImageUrl ?
          <img className='pin-guardado' src={savedImageUrl} alt="" width="300" /> : <p>NO HAY IMAGEN</p>
        }
      </div>

      {/* {savedImage ? <img src={savedImage} alt='Uploaded'/>: <p>NO HAY IMAGEN DISPONIBLE</p>} */}
    </div>
  );
};

export default Pines;