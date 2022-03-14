import React from "react";
import { themes } from "@storybook/theming";
import { addDecorator } from "@storybook/react";
import { withPerformance } from "storybook-addon-performance";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  darkMode: {
    dark: { ...themes.dark, appBg: "black" },
    light: { ...themes.normal, appBg: "white" },
  },
};

export const decorators = [
  (Story) => (
    <>
      <Story />
    </>
  ),
];

addDecorator(withPerformance);
