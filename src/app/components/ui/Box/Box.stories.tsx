import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Box } from "./Box";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "UI/Box",
	component: Box,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		//backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Box>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Box> = (args) => <Box {...args}>This is an alert</Box>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	color: "danger",
};
