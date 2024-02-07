import React, {useState} from "react";
import {Container} from 'react-bootstrap';
// import {values} from './Utils';
import { IncrementButton, ReductionButton } from "./Buttons";


const NumChar = () => {
    const [char, setChar] = useState(12)
    const incrementNumChars = () => {
        if (char < 20) {
            setChar(lastNumChar => {
                let newNumChar = lastNumChar
                newNumChar += 1
                return newNumChar
            })
        }
    }

    const reductionNumChars = () => {
        if (char > 8) {
            setChar(lastNumChar => {
                let newNumChar = lastNumChar
                newNumChar -= 1
                return newNumChar
            })
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
export default NumChar;
