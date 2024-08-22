import UserDropdown from "../userDropdown/userDropdown";
import "./header.css";
import Logo from "../../../assets/logopinterest.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Crear from "../../../pages/Crear/Crear";
import { useEffect, useState } from "react";

const Header = ({setImages}) => {
 
    const search = async (value) => {

        if (value.trim()===''){
            return;
        }
        const response = await fetch(
            `https://api.pexels.com/v1/search?query=${value}`,{headers:{
                'Authorization':"P58yyHWcCGDKKvA6tFOY6wc6ps9sqK1SW9jm40wDPeqYc1c5GZP8zn05"
            }},
        );
    
        const images = await response.json();
        setImages(images.photos)
    }
    
    //Render Phase

    const user = {
        avatar: "https://images.generated.photos/aAQ9aRMxbx28f3jkAx3ZDK3IJPw-T-INYhsWOKV0b7k/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzA0NjAyLmpwZw.jpg",
    };

    useEffect(()=>{
        search('Colombia')
    }, [])

    return (
        <div className="header_container">
            <div className="header_logo">
                <Link to={'/Home'}>
                <img className="logo_header" src={Logo} alt="Logo" />
                </Link>
                
            </div>

            <div className="header_items">
                <Link to={'/Home'} className="header_item">Inicio</Link>
                <Link to={'/Crear'} className="header_item">Crear</Link>
            </div>

            <div id="header_barra">
                <button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{color:"#639284",}} />
                </button>
                <input className="input_header" type="search" placeholder="Buscar"
                    onChange={(e) => search(e.target.value)}
                />
            </div>

            <div>
                <UserDropdown user={user} />
            </div>

        </div>
    );
};

export default Header;