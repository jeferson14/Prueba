import React from 'react';
import Nodo from './Nodo'

const InteractiveCircle = () => {
    var nodes = [
            { id: 1, title: 'Blue', color: '#0000FF', activado: false},
            { id: 2, title: 'Red', color: '#FF0000', activado: false}, 
            { id: 3, title: 'Green', color: '#00FF00', activado: false},
            { id: 4, title: 'Orange', color: '#F2890A', activado: false},
            { id: 5, title: 'Celeste', color: '#0AF2EB', activado: false},  
              
            ];
    //funcion que valida el si el circulo esta activo y si se puede encender o no
    const activarColor= id =>{
        if(nodes[id-1].activado){
            nodes[id-1].activado=false
            for (id;id<nodes.length;id++){
                nodes[id].activado=false
            }
            return "#9A9A9D";
        }
        else if(id===1){
            nodes[0].activado= true
            return nodes[id-1].color;
        }
        else if (nodes[id-2].activado === true){
            nodes[id-1].activado= true
            return nodes[id-1].color;
        }
        else{
            return "#9A9A9D"
        }
    }
    //CSS del div circular
    const propiedadesDiv={
        width: `800px`,
        height: `800px`,
        borderRadius: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    };
    return ( 
        <div style={propiedadesDiv}>
            {nodes.map(node=>(
                < Nodo
                    key={node.id}
                    radio={"60"}
                    node={node}
                    activarColor={activarColor}
                    cantidad={nodes.length}
                />
            ))}
        </div>
     );
}
 
export default InteractiveCircle;