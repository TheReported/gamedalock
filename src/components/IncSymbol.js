import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import CheckMark from './Check';
import CrossMark from './Cross';

const IncSymbol = () => {
    const [check, setCheck] = useState(true)

    return (
        <Container className="part">
            <label>¿Desea incluir símbolos?</label>
            <CheckMark is_symbol={check}/>
        </Container>
        
    )
}
export default IncSymbol;