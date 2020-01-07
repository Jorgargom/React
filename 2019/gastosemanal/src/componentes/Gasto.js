import React, { Component } from 'react';


class Gasto extends Component {
    render() {
        const {cantidadGasto, nombreGasto} = this.props.gasto;
        console.log(cantidadGasto);
        console.log(nombreGasto);
        
        return(
            <li className="gastos">
                <p>
                    {nombreGasto}
                    <span className="gasto">${cantidadGasto}</span>
                </p>
            </li>
        )
    }
}




export default Gasto;