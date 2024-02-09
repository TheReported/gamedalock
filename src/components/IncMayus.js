import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import CheckMark from './Check';

// En este componente nos enfocamos en que incluya en la contraseña letras mayúsculas.

const IncMayus = () => {
    // Utilizamos el useState y el localStorage para tratar y almacenar el estado de la funcionalidad de las mayúsculas.

    const [mark, setMark] = useState(localStorage.getItem('mayus') === 'true' || 'true')

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