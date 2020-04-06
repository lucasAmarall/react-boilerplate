import React from "react";
import { Container, Img } from "./style";
import Logo from "../../../assets/images/logo.svg";

const Home = () => {
  return (
    <Container>
      <Img src={Logo} alt="logo" />
    </Container>
  );
};

export default Home;
