import React from "react";
import Logo from "@assets/images/logo.svg";
import { Container, Img } from "./style";

const Home = () => {
  return (
    <Container>
      <Img src={Logo} alt="logo" />
    </Container>
  );
};

export default Home;
