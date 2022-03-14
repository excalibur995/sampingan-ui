const shadowColor = "#00000040";

const shadows = {
  none: "none",
  interactive: `0px 1px 2px 0px ${shadowColor}`,
  hover: `0px 4px 15px -3px ${shadowColor}`,
  float: `0px 20px 50px -12px ${shadowColor}`,
};

export type Shadows = typeof shadows;
export type ShadowType = keyof typeof shadows;

export default shadows;
