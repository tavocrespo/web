import { useState } from "react";
import "./pinCard.css";
import { useNavigate } from "react-router-dom";

const PinCard = ({ urlImage, images, source, guardar }) => {
    
    const navigate = useNavigate(null);
    const [imageSrc, setImagesSrc]=useState(urlImage);

    const handleButtonClick = () =>{
        const savedImages = JSON.parse(localStorage.getItem("savedImages")) || [];
        savedImages.push(urlImage);
        localStorage.setItem("savedImages",JSON.stringify(savedImages));
        navigate('/Guardados',{state: {imageSrc}});
    };
    //Render Phase

    return (
        <div>
            <div className="container_pin">
                <img className="pincard_image" src={urlImage} alt={`pin-${guardar}`} />
                <div className="overlay"></div>
                <button onClick={handleButtonClick} className="boton-guardar">Guardar</button>
            </div>
            <span>{guardar}</span>
        </div>
    )
};

export default PinCard;