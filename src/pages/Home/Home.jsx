import PinCard from "../../components/pinCard/pinCard.jsx";
import "../../components/pinCard/pinCard.css";
import Header from "../../components/pinCard/header/header.jsx";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import appFirebase from "../../credenciales.js";
import { getAuth, signOut } from 'firebase/auth'
import { useNavigate } from "react-router-dom";

const auth = getAuth(appFirebase)
import "./home.css";


const Home = () => {
    const [images, setImages] = useState(null)
    const navigate = useNavigate(null);
    const handleButtonClick = () => {
        navigate('/Guardados', {state: {images}});
    };

    return (
        <div>
            <header>
                <Header setImages={setImages} />
            </header>

            <div className="pincard_container">
                    {images && images.map((image, index) => (
                        <PinCard key={index} urlImage={image.src.medium}
                            source={"www.google.com"}
                        />
                    ))};
            </div>

        </div>



    )
};

export default Home;