import React from "react";
import Container from 'react-bootstrap/Container';
import CheckMark from './Check';
import CrossMark from './Cross';

const IncNumber = () => {
    return (
        <Container className="part">
            <label>¿Desea incluir números?</label>
            <CheckMark />
        </Container>
        
    )
}
export default IncNumber;