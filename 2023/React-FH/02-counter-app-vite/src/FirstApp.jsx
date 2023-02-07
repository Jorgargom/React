  
import PropTypes from 'prop-types';

const getResult = (a, b) => {
    return a + b
  }

export const FirstApp = ( { title, subTitle } ) => {
  
  /* console.log(props); */

/*   if ( !title ) {
    throw new Error ('El title no existe');
  } */

  return (
    <>
      <h1>Hello I´am { title }</h1>
      <p>I´am Fragment { subTitle }</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired
}