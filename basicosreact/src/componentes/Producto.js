import React, { Component } from 'react';


class Producto extends Component{
    render() {
      const {nombre, precio} = this.props.producto
      return (
        <div>
          <h2>{nombre}</h2>
          <p>Precio: {precio} €</p>
        </div>

      )
    }
}

export default Producto;