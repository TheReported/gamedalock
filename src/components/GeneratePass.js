import React from "react";
import {Button,Container} from 'react-bootstrap';
import { LockFill } from "react-bootstrap-icons";

const GeneratePass = () => {
    return (
        <Container className="part">
            <Button className="boton">Generar <LockFill className="lock" /></Button>
            <input className="showPass" readOnly="true" type="text"></input>
        </Container>
        
    )
}
export default GeneratePass;