import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import Nav from './nav';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  user-select: none;
  background-color: ${({theme})=>theme.color.main};
  display: flex;
`;

const TitleWrapper = styled.div`
  flex-grow: 1;
  min-width: 150px;
  padding: 15px 40px;
  -webkit-tap-highlight-color: transparent;
`;

//temporarily for FakeLogo
const StyledLogo = styled.div`
  color: ${({theme})=> theme.color.secondary}
  font-size: 30px;
  border: 1px solid ${({theme})=> theme.color.secondary}
  width: 100px;
  margin-left: 10vw;
  padding: 10px;
  text-align: center;
`;

//fake logo
const FakeLogo = ()=>(
  <StyledLogo>
    宸心宸意工程
  </StyledLogo>
)

const Title = ()=>(
  <FakeLogo />
)

const Header = ({ siteTitle }) => (
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
