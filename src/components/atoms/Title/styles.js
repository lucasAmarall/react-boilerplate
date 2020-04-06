import styled from "styled-components";

const sizes = {
  "small": "1em",
  "medium": "1.5em",
  "large": "2em",
};

// eslint-disable-next-line import/prefer-default-export
export const H1 = styled.h1`
  color: ${({theme}) => theme.colors.primaryText};
	font-size: ${({size}) => sizes[size]}
`;