import React from 'react';
import PropTypes from 'prop-types';

import ButtonGroup from '../ButtonGroup';
import Button from '../Button';

const OperationButtons = ({ updateCounter, value, maxValue }) => (
  <ButtonGroup>
    {['-5', '-1', '+1', '+5'].map((v) => {
      if (v < 0) {
        if (value + +v < maxValue * -1) {
          return null;
        }
      }
      if (value + +v > maxValue) {
        return null;
      }
      return (
        <Button key={v} type="button" onClick={updateCounter} value={+v}>
          {v}
        </Button>
      );
    })}
  </ButtonGroup>
);

OperationButtons.propTypes = {
  updateCounter: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
};

export default OperationButtons;
