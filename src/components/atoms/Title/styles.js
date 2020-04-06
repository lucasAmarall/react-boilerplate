import styled from "styled-components";

const sizes = {
	"small": "1em",
	"medium": "1.5em",
	"large": "2em",
};

export const H1 = styled.h1`
  color: ${({theme}) => theme.colors.primaryText};
	font-size: ${({size}) => sizes[size]}
`;