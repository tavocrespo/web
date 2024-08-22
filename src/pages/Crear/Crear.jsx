import React, { useState, useCallback, } from 'react'
import { useDropzone } from 'react-dropzone';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/pinCard/header/header';
import "./Crear.css";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


const Crear = () => {
  var event = Event
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const hanndleImageUpload = (event) => {
    if (event && event.target && event.target.files) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  const handleButtonClick = () => {
    if (image) {
      localStorage.setItem("savedImage", image);
      navigate('/Pines');
    }
  };

  const handleSaveImage = () => {
    if (image) {
      localStorage.setItem("savedImage", image);
      navigate("/Pines");
    };
    // const imageurl = 'https://via.placeholder.com/300';
    // console.log("guardando imagen:",imageurl);
    // localStorage.setItem("savedImage",imageurl);
    // navigate('/Pines')
  };

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles[0])
    // Do something with the files
  }, [])
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({ onDrop });


  return (
    <div className='text-black'>
      <header>
        <Header />
      </header>
      <hr />
      <div>
        <h1 className='texto_crear'>Crear Pin</h1>
      </div>
      <hr />
      <br />
      {acceptedFiles[0] &&
            (<img className='imagen-guardada' src={URL.createObjectURL(acceptedFiles[0])} alt="" />
            )}
      <div className="container-input">
        <form>
          <div {...getRootProps()} className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 font-semibold">Elige un archivo o arrástralo aquí</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Se recomienda usar archivos <br />SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
                <input {...getInputProps()} id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} accept='Pines/*' />
                {
                  isDragActive?
                    <p className='text-gray-100'>Drop the files here ...</p> :
                    <p className='text-gray-100'>Drag 'n' drop some files here, or click to select files</p>
                } 
            </label>
          </div>
        </form>
        {/* <div {...getRootProps()}>
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Drop the files here ...</p> :
              <p>Drag 'n' drop some files here, or click to select files</p>
          }
        </div> */}
        <br />
        <button onClick={handleSaveImage} disabled={!image} id='boton-archivos'>Crear Pin</button>ñ

      </div>
    </div>
  )
}

export default Crear;