import React, { Component } from 'react';
import Productos from './Productos';
import Footer from './Footer';
import Header from './Header';

class Aplicacion extends Component{

    state = {
        productos : [
          
        ]
      };

      componentDidMount() {

        const productos = [
          {nombre: 'Libro', precio: 10},
          {nombre: 'Disco de Música', precio: 20},
          {nombre: 'Instrumento musical', precio: 30},
          {nombre: 'Reproductor musical', precio: 40},
          {nombre: 'Albún Edición Especial', precio: 50}
        
        ]

        setTimeout( () => {
          this.setState({
            productos : productos
          });
        }, 3000);
      }
       

    render() {

      return (
        <div>
            <Header
              titulo="Nuestra tienda virtual"
            />
            <Productos 
              productos={this.state.productos}
            />
            <Footer />
        </div>
      )
    }

}

export default Aplicacion;
