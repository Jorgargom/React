import React, { Component } from 'react';
import '../css/index.css';
import Header from './Header';
import Formulario from './Formulario';

class App extends Component {
  render() {
    return (
      <div className="App container">
       <Header
       titulo='Gasto semanal'
       />
       <div className="contenido-principal contenido">
        <div className="row">
          <div className="one-half column">
          <Formulario
          
          />
          </div>
          <div className="one-half column">
          2
          </div>
        </div>
       </div>
      </div>
    );
  }
}

export default App;
