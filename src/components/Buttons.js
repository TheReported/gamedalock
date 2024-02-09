import React from "react";
import {Button} from 'react-bootstrap';

// Estos componentes contienen un boton el cual se aumenta o disminuye la cantidad de carácteres de la contraseña.


export const IncrementButton = ({click}) => {
    return (
        <Button onClick={click} className="boton">+</Button>
    )
}

export const ReductionButton = ({click}) => {
    return (
        <Button onClick={click} className="boton">-</Button>
    )
}

