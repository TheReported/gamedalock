import React, {useState} from "react"
import {Container} from 'react-bootstrap'
// import {values} from './Utils'
import { IncrementButton, ReductionButton } from "./Buttons"


const NumChar = () => {
    const [char, setChar] = useState(parseInt(localStorage.getItem('numChars')))

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
