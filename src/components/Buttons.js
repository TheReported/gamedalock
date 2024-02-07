import React from "react";
import {Button} from 'react-bootstrap';

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

