export const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export type Breakpoint = keyof typeof breakpoints;

export const mediaQueries = {
  up: (breakpoint: Breakpoint) => `@media (min-width: ${breakpoints[breakpoint]})`,
  down: (breakpoint: Breakpoint) => `@media (max-width: ${breakpoints[breakpoint]})`,
  between: (min: Breakpoint, max: Breakpoint) =>
    `@media (min-width: ${breakpoints[min]}) and (max-width: ${breakpoints[max]})`,
}; 