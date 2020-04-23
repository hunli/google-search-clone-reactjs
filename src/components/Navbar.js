import React from 'react';
import styled from 'styled-components';
import NavbarItem from './NavbarItem';
import Image from './Image';
import AppsDrawer from "../svg/apps-drawer.svg";

const StyledNav = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
`;

const NavDiv = styled.div`
  display: flex;
  align-items: center;
`;

const StyledList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

function Navbar() {
  return (
    <StyledNav>
      <NavDiv>
        <StyledList>
          <NavbarItem text='About' to='/'></NavbarItem>
          <NavbarItem text='Store' to='/about'></NavbarItem>
        </StyledList>
      </NavDiv>

      <NavDiv>
        <StyledList>
          <NavbarItem text='Gmail' to='/mail'></NavbarItem>
          <NavbarItem text='Images' to='/images'></NavbarItem>
        </StyledList>

        <Image src={AppsDrawer}></Image>
      </NavDiv>
    </StyledNav>
  );
}

export default Navbar;
