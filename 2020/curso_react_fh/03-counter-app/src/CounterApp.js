import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( {value } ) => {

    return (
      
        < >
            <h1>CounterApp</h1>
            <h2> { value } </h2>
        </>      
    

        );
    

}


CounterApp.propTypes = {
    saludo: PropTypes.number.isRequired
}





export default CounterApp;


// rafcp para crear un functional component