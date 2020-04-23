import React from 'react';
import styled from 'styled-components';

const StyledLi = styled.li`
  margin: 0px 5px;
  padding: 0px 10px;
  font-size: 13px;
  color: black;
`;

function NavbarItem(props) {
  return (
    <StyledLi>{props.text}</StyledLi>
  )
}

export default NavbarItem;
