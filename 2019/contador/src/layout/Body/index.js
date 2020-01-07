import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Box from './Box';

const Body = ({ children }) => (
  <Wrapper>
    <Box>
      {children}
    </Box>
  </Wrapper>
);

Body.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Body;
