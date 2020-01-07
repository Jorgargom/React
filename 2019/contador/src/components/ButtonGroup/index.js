import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../Flex';

const ButtonGroup = ({ center, ...props }) => (
  <Flex justifyContent={center ? 'center' : 'space-between'} {...props} />
);

ButtonGroup.defaultProps = {
  center: false,
};

ButtonGroup.propTypes = {
  center: PropTypes.bool,
};

export default ButtonGroup;
