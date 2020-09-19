import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( {value } ) => {

    const handleAdd = (e) => {
        console.log(e);
    }



    return (
      
        < >
            <h1>CounterApp</h1>
            <h2> { value } </h2>

            <button onClick={ handleAdd }>+1</button>



        </>      
    

        );
    

}


CounterApp.propTypes = {
    saludo: PropTypes.number
}





export default CounterApp;


// rafcp para crear un functional component