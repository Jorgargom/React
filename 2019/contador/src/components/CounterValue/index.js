import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';

const CounterValue = ({ value }) => (
  <Text center>
    El valor del contador es
    {' '}
    <b>
      {value}
    </b>
  </Text>
);

CounterValue.defaultProps = {
  value: 0,
};

CounterValue.propTypes = {
  value: PropTypes.number,
};

export default CounterValue;
