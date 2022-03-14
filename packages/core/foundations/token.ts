const red = {
  R50: "#FFEBEE",
  R500: "#E83730",
  R900: "#BA1816",
};

const green = {
  G50: "#E2F3F2",
  G500: "#2A9D90",
  G900: "#195347",
};

const blue = {
  B50: "#E2F4FA",
  B500: "#3DA5D9",
  B900: "#215581",
};

const yellow = {
  Y50: "#FFF8E1",
  Y500: "#FEC209",
  Y900: "#DC5F00",
};

const neutral = {
  N50: "#FFFFFF",
  N100: "#F7F7F7",
  N200: "#ECECEC",
  N400: "#CCCCCC",
  N500: "#C4C4C4",
  N600: "#9B9B9B",
  N900: "#262626",
};

const sampinganUiColors = {
  ...red,
  ...green,
  ...blue,
  ...yellow,
  ...neutral,
};

export type SampinganColors = typeof sampinganUiColors;
export type SampinganColorsPallete = keyof typeof sampinganUiColors;

export default sampinganUiColors;
