import React from "react";
import Title from "./index";
import { action } from "@storybook/addon-actions";

export default {
	title: "Title",
	component: Title,
};

export const SmallTitlteWithText = () => (
	<Title onClick={action("onClick")} size="small">Title Example</Title>
);

export const MediumTitlteWithText = () => (
	<Title onClick={action("onClick")} size="medium">Title Example</Title>
);

export const LargeTitlteWithText = () => (
	<Title onClick={action("onClick")} size="large">Title Example</Title>
);

