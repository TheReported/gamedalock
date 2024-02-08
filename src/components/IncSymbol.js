import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import CheckMark from './Check';

const IncSymbol = () => {
    const [mark, setMark] = useState(localStorage.getItem('symbols') === 'true' || 'true')


    const toggleSymbols = () => {
        const newMark = !mark
        setMark(newMark)
        localStorage.setItem('symbols', newMark)

    }
    return (
        <Container className="part">
            <label>¿Desea incluir símbolos?</label>
            <CheckMark is_marked={mark} click={toggleSymbols}/>
        </Container>
        
    )
}
export default IncSymbol;