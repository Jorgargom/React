import React, { Component } from 'react';
import {revisarPresupuesto} from '../helper';

class Restante extends Component {
  render() {

    const presupuesto = this.props.presupuesto;
    const restante = this.props.restante;


    return (
      
        <div className={revisarPresupuesto(presupuesto, restante)}>
        Restante: € {this.props.restante}
        </div>
      
    )
  }
}

export default Restante;