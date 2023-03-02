import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Alert } from "./Alert";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "UI/Alert",
	component: Alert,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		//backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Alert>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args}>This is an alert</Alert>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	intent: "danger",
};
