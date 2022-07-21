import React from "react"
import Header from "Components/Header";
import Body from "Components/Body/index";
import Footer from "Components/Footer";
import {
  StyleScreen,
  WrapperBody
} from './App.styled';

const App = () => {

  return (
    <StyleScreen>
        <Header />
      <WrapperBody>
        <Body />
      </WrapperBody>
      <Footer />
    </StyleScreen>
  );
}

export default App;
