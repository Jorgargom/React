
import React, { Component } from 'react';
import Producto from './Producto';


class Productos extends Component{
    render() {
      return (
        <div>
            <h2>Hola desde productos</h2>
            {Object.keys(this.props.productos).map(key => (
                    <Producto 
                    
                        key={key}
                        producto={this.props.productos[key]}
                    
                    />
            ))}
        </div>
      )
    }
}

export default Productos;