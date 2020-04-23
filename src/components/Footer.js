import React from 'react';
import styled from 'styled-components';

const StylizedFooter = styled.div`
  display: flex;
  width: 100%;
  line-height: 40px;
  flex-direction: row;
  justify-content: space-between;
  bottom: 0px;
  position: absolute;
  background-color: #f2f2f2;
`;

const StylizedLeftUl = styled.div`
  display: flex;
  align-items: center;
`;

const StylizedRightUl = styled.div`
  display: flex;
  align-items: center;
`;

const StylizedList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StylizedLi = styled.li`
  padding: 0px 5px;
  margin: 0px 5px;
  font-size: 10pt;
`;

function Footer() {
  return (
    <StylizedFooter>
      <StylizedLeftUl>
        <StylizedList>
          <StylizedLi>Advertising</StylizedLi>
          <StylizedLi>Business</StylizedLi>
          <StylizedLi>How Search works</StylizedLi>
        </StylizedList>
      </StylizedLeftUl>

      <StylizedRightUl>
        <StylizedList>
          <StylizedLi>Privacy</StylizedLi>
          <StylizedLi>Terms</StylizedLi>
          <StylizedLi>Settings</StylizedLi>
        </StylizedList>
      </StylizedRightUl>
    </StylizedFooter>
  )
}

export default Footer;
