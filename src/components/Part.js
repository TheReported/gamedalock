import React from "react";
import Button from 'react-bootstrap/Button';

const Part = () => {
    return (
        <div className="part">
            <label>Número de carácteres:</label>
            <div className="controls">
                <Button className="boton">-</Button>
                <span>0</span>
                <Button className="boton">+</Button>
            </div>
        </div>
    )
}
export default Part;