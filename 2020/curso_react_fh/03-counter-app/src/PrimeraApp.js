import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ( {saludo } ) => {




    return (
      
        < >
            <h1>{saludo}</h1>
            <p>Mi primera aplicación</p>
        </>      
    

        );
    

}


PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}






export default PrimeraApp;