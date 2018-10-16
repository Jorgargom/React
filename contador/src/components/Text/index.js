import styled from 'styled-components';
import styledMap from 'styled-map';
import PropTypes from 'prop-types';

const StyledText = styled.p`
  margin: 0;
  font-size: 22px;
  text-align: ${styledMap({
    center: 'center',
    default: 'left',
  })};
  color: ${({ theme }) => styledMap('color', {
    white: theme.colors.white,
    danger: theme.colors.danger,
    primary: theme.colors.primary,
    success: theme.colors.green,
    default: theme.colors.black,
  })};
  background: ${({ theme }) => styledMap('background', {
    white: theme.colors.white,
    danger: theme.colors.danger,
    primary: theme.colors.primary,
    success: theme.colors.green,
    black: theme.colors.black,
    default: 'transparent',
  })};
  padding: ${styledMap({
    space: '10px 20px',
    default: '5px 10px',
  })};
`;

StyledText.defaultProps = {
  color: 'black',
  background: 'transparent',
};

StyledText.propTypes = {
  color: PropTypes.oneOf(['white', 'danger', 'primary', 'success', 'black']),
  background: PropTypes.oneOf(['white', 'danger', 'primary', 'success', 'black', 'transparent']),
};

export default StyledText;
