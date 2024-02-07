import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import CheckMark from './Check';

const IncMayus = () => {
    const [mark, setMark] = useState(true)
    const toggleMayus = () => {
        setMark(() => {
            let newState = mark
            newState = !mark
            return newState
        })
    }

    return (
        <Container className="part">
            <label>¿Desea incluir mayúsculas?</label>
            <CheckMark is_marked={mark} click={toggleMayus}/>
        </Container>
        
    )
}
export default IncMayus;