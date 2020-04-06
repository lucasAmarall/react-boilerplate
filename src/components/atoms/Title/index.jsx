import React from "react";
import PropTypes from "prop-types";

import { H1 } from "./styles";

const Title = ({size, children, onClick}) => <H1 onClick={() => onClick("Example")} size={size}>{children}</H1>;

Title.propTypes = {
	size: PropTypes.oneOf(["small", "meddium", "large"]),
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func
};

export default Title;