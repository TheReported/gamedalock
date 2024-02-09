import React from "react";
import Logo from '../img/logo.png';

// En este componente se añade el logo de la aplicación

const Image = () => {
    return (
        <div className="logo">
            <img src={Logo} />
        </div>
    )
}

export default Image;