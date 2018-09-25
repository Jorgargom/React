import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';


class App extends Component {

  state = {
    error: ''
  }

  componentDidMount(){
    this.setState({
      error: false
    })
  }

  datosConsulta = respuesta => {
    if(respuesta.ciudad === '' || respuesta.pais === '') {
      this.setState({
        error: true
      })
  } else {
      console.log('todo correcto')
  }
}

  render() {
    return (
      <div className="app">
        <Header
          titulo = 'Clima React'
        /> 
        <Formulario 
          datosConsulta= {this.datosConsulta}
        />
      </div>
    );
  }
}

export default App;
