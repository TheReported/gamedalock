import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import CheckMark from './Check';

const IncNumber = () => {
    const [mark, setMark] = useState(localStorage.getItem('numbers') === 'true' || 'true')

    const toggleNumber = () => {
        const newMark = !mark
        setMark(newMark)
        localStorage.setItem('numbers', newMark)

    }

    return (
        <Container className="part">
            <label>¿Desea incluir números?</label>
            <CheckMark is_marked={mark} click={toggleNumber}/>
        </Container>
        
    )
}
export default IncNumber;