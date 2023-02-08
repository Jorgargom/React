import PropTypes from 'prop-types'
;

export const CounterApp = ({value}) => {
  
    const handleAdd = (event) => {
        console.log(value)
        value = 1000;
    }
  
  
    return (
            <>
            <h1>CounterApp</h1>
            <h2>{ value }</h2>
            <button onClick={ handleAdd }>
                    +1
            </button>
            </>
      )
}


CounterApp.propTypes = {
    value: PropTypes.number.isRequired
  }
  