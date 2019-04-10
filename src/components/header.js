import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import Nav from './nav';

import FakeLogo from './fakeLogo';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  user-select: none;
  background-color: ${({theme})=>theme.color.primary};
  display: flex;
`;

const TitleWrapper = styled.div`
  flex-grow: 1;
  padding: 15px 0 15px 140px;
  -webkit-tap-highlight-color: transparent;
`;

const Title = ()=>(
  <FakeLogo />
)

const Header = () => (
  <StyledHeader>
    <TitleWrapper>
      <Title />
    </TitleWrapper>
    <Nav />
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
