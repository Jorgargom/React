import React, { Component } from 'react';
import Header from "./Header";
import AgregarCita from "./AgregarCita";
import ListaCitas from './ListaCitas';

class App extends Component {

  state = {
    citas : {}
  }



  crearCita = infoCita => {
    // tomar una copia del state
      const citas = {...this.state.citas};
    // Agregarlo al state actual
      citas[`citas${Date.now()}`] = infoCita;
    // Set al state
      this.setState({citas})
  }

  borrarCita = id => {
    console.log('Eliminando..' + id);
  }

  render() {
    return (
      <div className="container">
        
        <Header
          titulo = "Administrador de Pacientes"
        />

        <div className="row">
          <div className="col-md-6">
            <AgregarCita 
              crearCita={this.crearCita}
              
            />
          </div>
          <div className="col-md-6">

          <ListaCitas
            citas={this.state.citas}
            borrarCita={this.borrarCita}
          />
          
          </div>
        </div>




      </div>
    );
  }
}

export default App;
