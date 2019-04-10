import React from 'react';
import styled from 'styled-components';


const StyledLogo = styled.div`
  color: ${({theme})=> theme.color.text.primary}
  font-size: 24px;
  border: 1px solid ${({theme})=> theme.color.text.primary}
  width: 80px;
  padding: 8px;
  text-align: center;
`;

//fake logo
const FakeLogo = ()=>(
  <StyledLogo>
    宸心宸藝工程
  </StyledLogo>
)

export default FakeLogo;