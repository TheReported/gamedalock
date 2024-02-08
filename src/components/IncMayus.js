import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import CheckMark from './Check';

const IncMayus = () => {
    const [mark, setMark] = useState(localStorage.getItem('mayus') === 'true')

    const toggleMayus = () => {
        const newMark = !mark
        setMark(newMark)
        localStorage.setItem('mayus', newMark)

    }

    return (
        <Container className="part">
            <label>¿Desea incluir mayúsculas?</label>
            <CheckMark is_marked={mark} click={toggleMayus}/>
        </Container>
        
    )
}
export default IncMayus;