import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const Text = styled.div`
    ${({theme})=>`color: ${theme.color.text.secondary};`}
    ${breakpoint('tablet')`
        ${({theme})=>`color: ${theme.color.text.primary};`}
    `}
    font-size: 16px;
`;

const NavItem = styled(Text)`
    display: inline-block;
    position: relative;
    padding: 8px;
    min-width: 70px;
    text-align: center;
    ${({theme})=>`color: ${theme.color.text.secondary};`}
    &:hover {
        ${({menu,theme})=>menu ? `background-color: ${theme.color.secondary}`: ''}
        ${({theme})=>`color: ${theme.color.text.secondary};`}
    }
`;

export default NavItem;