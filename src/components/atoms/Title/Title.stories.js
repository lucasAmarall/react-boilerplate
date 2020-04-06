import React from "react";
import Title from "./index";
import { action } from "@storybook/addon-actions";

export default {
	title: "Title",
	component: Title,
};

export const SmallTitlteWithText = () => <Title onClick={action("onClick")}>Title Example</Title>;
export const MediumTitlteWithText = () => <Title onClick={action("onClick")}>Title Example</Title>;
export const LargeTitlteWithText = () => <Title onClick={action("onClick")}>Title Example</Title>;
