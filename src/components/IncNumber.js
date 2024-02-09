import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import CheckMark from './Check';

// En este componente nos enfocamos en que se incluya números en la contraseña..


const IncNumber = () => {
    // Utilizamos el useState y el localStorage para tratar y almacenar el estado de la funcionalidad de los números.

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