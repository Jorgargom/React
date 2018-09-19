

import React, { Component } from 'react'

class FormularioGasto extends Component {
  render() {
    return (
        <form>
        <h2>Agrega tus gastos aqui</h2>
        
        <div className="campo">
            <label>Nombre Gasto</label>
            <input className="u-full-width" type="text" placeholder="Ej. Transporte" />
        </div>
    
        <div className="campo">
            <label>Cantidad</label>
            <input className="u-full-width" type="text" placeholder="Ej. 300" />
        </div>
    
        <input className="button-primary u-full-width" type="submit" value="Agregar" />
    </form>
    )
  }
}

export default FormularioGasto;