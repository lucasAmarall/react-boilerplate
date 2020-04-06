import React from "react";
import { Container, Img } from "./style";
import Logo from "../../../assets/images/logo.svg";
import Title from "../../atoms/Title";

const Home = () => {
	return(
		<Container>
			<Img src={Logo} alt="logo" />
			<Title />
		</Container>
	);
};

export default Home;