import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import CheckMark from './Check';

const IncNumber = () => {
    const [mark, setMark] = useState(true)
    const toggleNumber = () => {
        setMark(() => {
            let newState = mark
            newState = !mark
            return newState
        })
    }
    return (
        <Container className="part">
            <label>¿Desea incluir números?</label>
            <CheckMark is_marked={mark} click={toggleNumber}/>
        </Container>
        
    )
}
export default IncNumber;