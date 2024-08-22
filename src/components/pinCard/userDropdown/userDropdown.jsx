import { Link } from "react-router-dom";
import "./userDropdown.css";
import { useState } from "react";
import appFirebase from "../../../credenciales";
import { getAuth, signOut } from 'firebase/auth'
const auth = getAuth(appFirebase)

const UserDropdown = ({ user }) => {
    // Render Phase

    const [showdropdown, setShowdorpdown] = useState(false);
    return (
        <div>
            <div className="userDropdown_container">
                <div className="userDropdown_anchor" onClick={() => setShowdorpdown(!showdropdown)}>
                    <img className="useravatar_container"
                        src={user.avatar}
                        alt="userProfilePicture" />
                </div>

                {showdropdown && (
                    <div className="userdropdown_dropdown">
                        <Link to={'/Pines'}>
                        <button className="userdropdown_items">
                            Mis Pines
                        </button>
                        </Link>
                        <Link to={'/Guardados'}>
                        <button className="userdropdown_items">
                            Guardados
                        </button>
                        </Link>
                        <br />
                        <Link to={'/Login'}>
                            <button onClick={() => signOut(auth)} className="userdropdown_items">
                                Log Out
                            </button>
                        </Link>


                    </div>
                )}
            </div>

        </div>
    );
};

export default UserDropdown;