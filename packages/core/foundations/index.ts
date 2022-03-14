import colors, { SampinganColorsPallete, SampinganColors } from "./token";
import responsive, {
  Breakpoints,
  MediaQueries,
  Responsive,
} from "./responsive";
import shadows, { ShadowType, Shadows } from "./shadow";
import radii, { RadiiTypes, Radii } from "./radii";

export interface Foundations {
  colors: SampinganColors;
  responsive: Responsive;
  shadows: Shadows;
  radii: Radii;
}

export type {
  SampinganColors,
  SampinganColorsPallete,
  Breakpoints,
  MediaQueries,
  ShadowType,
  RadiiTypes,
  Radii,
};

const foundations: Foundations = {
  colors,
  responsive,
  shadows,
  radii,
};

export default foundations;
