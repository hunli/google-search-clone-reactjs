import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import styled from 'styled-components';
import AppsDrawer from "./svg/google_logo.png";

const StylizedCenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

`;

const Logo = styled.img`
  height: 200px;
  width: 500px;
`;

const StylizedInput = styled.input`
  display: flex;
  height: 44px;
  margin: 0 auto;
  width: 582px;
  margin-top: 20px;
  line-height: 34px;
  font: 16px arial,sans-serif;
  box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
  border-color: rgba(223,225,229,0);
  border-radius: 24px;
  outline: none;
`;

const StylizedCenterButtonsDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 18px
`;

const StylizedButton = styled.button`
  background-image: -webkit-linear-gradient(top,#f5f5f5,#f1f1f1);
  background-color: #f2f2f2;
  border: 1px solid #f2f2f2;
  border-radius: 4px
  font-family: arial,sans-serif;
  font-size: 14px;
  margin: 11px 4px;
  padding: 0 16px;
  line-height: 27px;
  height: 36px;
  min-width: 54px;
  text-align: center;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <Navbar />

      <body>
        <StylizedCenterDiv>
          <Logo src={AppsDrawer}></Logo>
          <StylizedInput type='text'></StylizedInput>
        </StylizedCenterDiv>

        <StylizedCenterButtonsDiv>
          <div>
            <StylizedButton>Google Search</StylizedButton>
            <StylizedButton>I'm Feeling Lucky</StylizedButton>
          </div>
        </StylizedCenterButtonsDiv>
      </body>

      <Footer />
    </div>
  );
}

export default App;
