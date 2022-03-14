import { createStitches } from "@stitches/react";
import { colors, responsive, shadows, radii } from "@sampingan-ui/core";

export const { styled, css, keyframes, globalCss, getCssText } = createStitches(
  {
    theme: {
      colors,
      shadows,
      radii,
    },
    utils: {
      flexCenter: () => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }),
      gridCenter: () => ({
        display: "grid",
        placeContent: "center",
      }),
      equallyGridColumn: (column: number) => ({
        display: "grid",
        gridTemplateColumns: `repeat(${column}, minmax(0, 1fr))`,
      }),
      equallyGridRow: (row: number) => ({
        display: "grid",
        gridTemplateRows: `repeat(${row}, minmax(0, 1fr))`,
      }),
      size: (value: string | number) => ({
        width: value,
        height: value,
      }),
      insetState: (color: string) => ({
        boxShadow: `inset 0 0 100px 100px ${color}`,
      }),
      usePressed: () => ({
        "&:active": {
          insetState: "rgba(0, 0, 0, 0.2)",
        },
      }),
      useHover: () => ({
        "&:hover": {
          insetState: "rgba(255, 255, 255, 0.2)",
        },
      }),
    },
    media: responsive.mediaQueries,
    prefix: "sampingan",
  }
);

export const globalStyles = globalCss({
  "@font-face": {
    fontFamily: `'Roboto', sans-serif`,
    fontDisplay: "swap",
    src: `@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap')`,
  },
  html: {
    fontFamily: "'Roboto', sans-serif",
  },
});

globalStyles();
