  
import PropTypes from 'prop-types';

export const FirstApp = ( { title, subTitle, name } ) => {
  

  return (
    <>
      <h1>Hello I´am { title }</h1>
      <p>I´am Fragment { subTitle }</p>
      <p>Name { name }</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
  title: 'No hay título',
  subTitle: 'No hay subtítulo',
  name: 'Jorge García'
}