import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import CheckMark from './Check';

// En este componente nos enfocamos en que se incluyan símbolos en la contraseña.


const IncSymbol = () => {
    // Utilizamos el useState y el localStorage para tratar y almacenar el estado de la funcionalidad de los símbolos.

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