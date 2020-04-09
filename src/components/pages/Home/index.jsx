import React from "react";
import Logo from "@assets/images/logo.svg";
import { useTranslation } from "react-i18next";
import Title from "@atoms/Title";
import { Container, Img } from "./style";

const Home = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Title>{t("example")}</Title>
      <Img src={Logo} alt="logo" />
    </Container>
  );
};

export default Home;
