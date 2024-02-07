import React from "react";
import Button from 'react-bootstrap/Button';
import {Check} from 'react-bootstrap-icons';

const CheckMark = ({is_symbol}) => {
    if (is_symbol) {

    }
    return (
        <Button onClick={is_symbol} className="boton"><Check /></Button>
        
    )
}
export default CheckMark;