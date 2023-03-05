import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Banner } from "./Banner";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "UI/Banner",
	component: Banner,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		//backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Banner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args}>This is an alert</Banner>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	color: "brand",
};
