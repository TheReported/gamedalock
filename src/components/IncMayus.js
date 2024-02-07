import React from "react";
import Container from 'react-bootstrap/Container';
import CheckMark from './Check';
import CrossMark from './Cross';

const IncMayus = () => {
    return (
        <Container className="part">
            <label>¿Desea incluir mayúsculas?</label>
            <CheckMark />
        </Container>
        
    )
}
export default IncMayus;