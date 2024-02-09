import React from "react";
import Button from 'react-bootstrap/Button';
import {Check} from 'react-bootstrap-icons';
import {X} from 'react-bootstrap-icons';

// Este componente contiene dos botones los cuales cambian su estado a partir de si está marcado.

const CheckMark = ({is_marked, click}) => {

    if (is_marked) {
        return (
            <Button onClick={click} className="boton"><Check /></Button>
            
        )
    }

    else {
        return (
            <Button onClick={click} className="boton"><X /></Button>
        )
    }
}
export default CheckMark;