import React from 'react';
import PropTypes from 'prop-types';
import { rgba } from 'polished';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;
  border-bottom: 1px solid #000;
  box-shadow: 0 1px 0 ${rgba('#fff', 0.2)};
  position: relative;
`;

const StyledImg = styled.img`
  display: inline-block;
  width: 60px;
  height: 60px;
`;

const StyledH1 = styled.h1`
  font-size: 20px;
`;

const Header = ({ logo }) => (
  <StyledHeader>
    <StyledImg src={logo} alt="" />
    <StyledH1>
      Ejemplo de contador KeepCoding
    </StyledH1>
  </StyledHeader>
);

Header.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Header;
