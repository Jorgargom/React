import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import PrimerComponente from './componentes/Aplicacion';
import registerServiceWorker from './registerServiceWorker';




ReactDOM.render(<PrimerComponente />, document.getElementById('root'));
registerServiceWorker();
