const radii = {
  square: "0px",
  semi_rounded: "6px",
  rounded: "12px",
  circle: "9999px",
};

export type Radii = typeof radii;
export type RadiiTypes = keyof typeof radii;

export default radii;
