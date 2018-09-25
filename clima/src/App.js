import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Error from './componentes/Error';


class App extends Component {

  state = {
    error: '', 
    consulta: {}
  }

  componentDidUpdate(){
    this.consultarApi();
  }



  componentDidMount(){
    this.setState({
      error: false
    })
  }

  consultarApi = () => {
    const {ciudad, pais} = this.state.consulta;
    if(!ciudad || !pais) return null;

    const appId = '4c971379f7d7a9e92e1cde3be1777b8e';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
    
    console.log(url);    
    
    // query con fetch api




  }

  datosConsulta = respuesta => {
    if(respuesta.ciudad === '' || respuesta.pais === '') {
      this.setState({
        error: true
      })
  } else {
    this.setState({
      consulta: respuesta 
    })
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
