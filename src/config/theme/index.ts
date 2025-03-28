export * from './colors';
export * from './typography';
export * from './spacing';
export * from './breakpoints';
export * from './animations';

export const theme = {
  colors: require('./colors').colors,
  typography: require('./typography').typography,
  spacing: require('./spacing').spacing,
  breakpoints: require('./breakpoints').breakpoints,
  animations: require('./animations').animations,
  transitions: require('./animations').transitions,
} as const;

export type Theme = typeof theme; 