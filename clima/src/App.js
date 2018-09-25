import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Error from './componentes/Error';


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

    const error = this.state.error;

    let resultado;

    if(error){
      resultado = <Error mensaje= "Ambos campos son obligatorios" />
    }



    return (
      <div className="app">
        <Header
          titulo = 'Clima React'
        /> 
        <Formulario 
          datosConsulta= {this.datosConsulta}
        />
        {resultado}





      </div>

    );
  }
}

export default App;
