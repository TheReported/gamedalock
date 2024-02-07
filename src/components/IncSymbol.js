import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import CheckMark from './Check';

const IncSymbol = () => {
    const [mark, setMark] = useState(true)
    const toggleSymbols = () => {
        setMark(() => {
            let newState = mark
            newState = !mark
            return newState
        })
    }
    return (
        <Container className="part">
            <label>¿Desea incluir símbolos?</label>
            <CheckMark is_marked={mark} click={toggleSymbols}/>
        </Container>
        
    )
}
export default IncSymbol;