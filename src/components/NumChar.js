import React, {useState} from "react"
import {Container} from 'react-bootstrap'
import { IncrementButton, ReductionButton } from "./Buttons"

// En este componente nos enfocamos en la suma y resta de la cantidad de caractéres que tendrá la contraseña.

const NumChar = () => {
    // Utilizamos el useState y el localStorage para tratar y almacenar la cantidad de caractéres, si no encuentra nada en el localStorage, se usa por defecto el valor establecido.
    const [char, setChar] = useState(parseInt(localStorage.getItem('numChars')) || 12)

    const incrementNumChars = () => {
        if (char < 20) {
            const newChar = char + 1
            setChar(newChar)
            localStorage.setItem('numChars', newChar)
        }
    }

    const reductionNumChars = () => {
        if (char > 8) {
            const newChar = char - 1
            setChar(newChar)
            localStorage.setItem('numChars', newChar)
        }
    }

    return (
        <Container className="part">
            <label>Número de carácteres:</label>
            <div className="controls">
                <ReductionButton click={reductionNumChars}/>
                <span>{char}</span>
                <IncrementButton click={incrementNumChars}/>
            </div>
        </Container>
        
    )
}
export default NumChar
