import React, { Component } from 'react';
import Header from './componentes/Header';

class App extends Component {

  componentDidMount(){
    this.obtenerCategorias();
  }

  obtenerCategorias = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=546LVYG4K4YAZ4SQNB3T&locale=es_ES`;

    await fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(categorias => {
        console.log(categorias);
      })
  }



  render() {
    return (
      <div className="App">
       <Header
       
       />
      </div>
    );
  }
}

export default App;
