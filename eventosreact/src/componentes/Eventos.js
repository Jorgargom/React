import React, { Component } from 'react';
import Evento from './Evento';

class Eventos extends Component {
    
    render() { 
        return ( 
            <div className="uk-child-width-1-3@m" uk-grid="true">
                { Object.keys(this.props.eventos).map(key => (
                    <Evento
                        key = {key} 
                        info={this.props.eventos[key]}
                    />
                ))}
            </div>
         )
    }
}
 
export default Eventos;