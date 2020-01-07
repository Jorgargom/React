import styled from 'styled-components';

const StyledFlex = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'inherit'};
  align-items: ${({ alignItems }) => alignItems || 'inherit'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'inherit'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'inherit'};
`;

export default StyledFlex;
