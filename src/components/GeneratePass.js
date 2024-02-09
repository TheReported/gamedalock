import React from "react";
import {Button,Container} from 'react-bootstrap';
import { LockFill } from "react-bootstrap-icons";

// En este componente se mostrará la contraseña y se renovará al hacer click en el botón.

const GeneratePass = ({prop}) => {

    return (
        <Container className="part">
            <Button type="submit" className="boton">Generar <LockFill className="lock" /></Button>
            <input className="showPass" readOnly={true} value={prop} type="text"></input>
        </Container>
        
    )
}
export default GeneratePass;