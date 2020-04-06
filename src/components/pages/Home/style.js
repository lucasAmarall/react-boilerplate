import styled, { keyframes } from "styled-components";

export const Container = styled.section`
	width: 100vw;
	height: 100vh;
	background: ${({theme}) => theme.colors.primary};
`;

const fadeIn = keyframes`
  from {
			transform: translate(-50%, -50%) rotate(0deg);
		}
		to{
			transform: translate(-50%, -50%) rotate(360deg);
		}
	}
`;

export const Img = styled.img`
	width: 300px;
	height: 300px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	animation: ${fadeIn} 3s linear infinite;	
`;