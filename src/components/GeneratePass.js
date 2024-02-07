import React, {useState} from "react";
import {Button,Container} from 'react-bootstrap';
import { LockFill } from "react-bootstrap-icons";

const GeneratePass = () => {
    const [password, setPassword] = useState("maracaibo")

    return (
        <Container className="part">
            <Button type="submit" className="boton">Generar <LockFill className="lock" /></Button>
            <input className="showPass" readOnly={true} value={password} type="text"></input>
        </Container>
        
    )
}
export default GeneratePass;