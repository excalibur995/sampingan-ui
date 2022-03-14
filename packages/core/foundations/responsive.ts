/**
 * breackpoints in px
 */
const breakpoints = {
  "@xs": 360,
  "@sm": 640,
  "@md": 840,
  "@lg": 1024,
  "@xl": 1200,
  "@xxl": 1440,
};

/**
 * for stitches only
 */
const mediaQueries: MediaQueries = (() => {
  const media_query = {} as MediaQueries;
  for (const points in breakpoints) {
    media_query[points] = `min-width: ${breakpoints[points]}px`;
  }
  return media_query;
})();

const responsive = {
  breakpoints,
  mediaQueries,
};

export type Breakpoints = keyof typeof breakpoints;
export type MediaQueries = Record<Breakpoints, string>;
export type Responsive = typeof responsive;

export default responsive;
