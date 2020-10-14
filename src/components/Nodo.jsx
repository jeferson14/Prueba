import React, { useState } from 'react';
import PropTypes from 'prop-types'

const Nodo = ({node,radio,activarColor,cantidad}) => {
    //variable que calcula el padding entre botones dependiendo de la cantidad
    const padd=parseInt(radio,10)/cantidad;
    //state que actualiza el background del boton
    const [propiedades,setPropiedades]=useState({
        width: `${radio}px`,
        height: `${radio}px`,
        borderRadius: `${radio}px`,
        backgroundColor: "#9A9A9D",
        margin: padd

    });

    //funcion que actualiza el state 
    const color= id =>{      
        setPropiedades({
            ...propiedades,
            backgroundColor: activarColor(id)
        })
    }

    return ( 
        <button type="button" className="btn" style={propiedades} onClick={()=>color(node.id)}>{node.title}
        </button>
     );
}
 
Nodo.propTypes ={
    node: PropTypes.object.isRequired, 
    radio: PropTypes.string.isRequired,
    activarColor: PropTypes.func.isRequired,
    cantidad: PropTypes.number.isRequired,
}

export default Nodo;