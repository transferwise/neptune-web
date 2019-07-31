const breakpoints = [0, 576, 768, 992, 1200];

export const mediaQueries = breakpoints.map(bp => `@media (min-width: ${bp}px)`);
