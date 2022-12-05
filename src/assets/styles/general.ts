
export const mediaQuery = {
  sm: 320,
  md: 768,
  lg: 1024,
  xl: 1360,
  xxl: 1920,
}

export const Breakpoints = {
  sm: `${mediaQuery.sm}px`,
  md: `${mediaQuery.md}px`,
  lg: `${mediaQuery.lg}px`,
  xl: `${mediaQuery.xl}px`,
  xxl: `${mediaQuery.xxl}px`,
}

export const textSizing = [12, 14, 15, 16, 18, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]
export const baseUnit = 5

export const common = {
  font: {
    family: {
      mulish:
        '"Mulish",-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;',
    },
    weight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    size: {
      s1: textSizing[0] + 'px',
      s2: textSizing[1] + 'px',
      s3: textSizing[2] + 'px',
      s4: textSizing[3] + 'px',
      s5: textSizing[4] + 'px',
      s6: textSizing[5] + 'px',
      s7: textSizing[6] + 'px',
      s8: textSizing[7] + 'px',
      s9: textSizing[8] + 'px',
    }
  },
  breakpoints: [
    Breakpoints.md,
    Breakpoints.lg,
    Breakpoints.xl,
    Breakpoints.xxl,
  ],

  device: {
    mobile: `(min-width: ${Breakpoints.sm})`,
    tablet: `(min-width: ${Breakpoints.md})`,
    desktop: `(min-width: ${Breakpoints.lg})`,
    widescreen: `(min-width: ${Breakpoints.xl})`,
  },

  spacing: {
    s1: baseUnit + 'px',
    s2: baseUnit * 2 + 'px',
    s3: baseUnit * 3 + 'px',
    s4: baseUnit * 4 + 'px',
    s5: baseUnit * 5 + 'px',
    s6: baseUnit * 6 + 'px',
    s7: baseUnit * 7 + 'px',
    s8: baseUnit * 8 + 'px',
    s9: baseUnit * 9 + 'px',
    s10: baseUnit * 10 + 'px',
    s11: baseUnit * 11 + 'px',
    s12: baseUnit * 12 + 'px',
    s13: baseUnit * 13 + 'px',
    s14: baseUnit * 14 + 'px',
    s15: baseUnit * 15 + 'px',
    s16: baseUnit * 16 + 'px',
    s17: baseUnit * 17 + 'px',
    s18: baseUnit * 18 + 'px',
    s19: baseUnit * 19 + 'px',
    s20: baseUnit * 20 + 'px',
    s21: baseUnit * 21 + 'px',
    s22: baseUnit * 22 + 'px',
    s23: baseUnit * 23 + 'px',
    s24: baseUnit * 24 + 'px',
    s25: baseUnit * 25 + 'px',
  },
  grid: {
    g1: ((1 / 12) * 100).toFixed(5) + '%',
    g2: ((2 / 12) * 100).toFixed(5) + '%',
    g3: ((3 / 12) * 100).toFixed(5) + '%',
    g4: ((4 / 12) * 100).toFixed(5) + '%',
    g5: ((5 / 12) * 100).toFixed(5) + '%',
    g6: ((6 / 12) * 100).toFixed(5) + '%',
    g7: ((7 / 12) * 100).toFixed(5) + '%',
    g8: ((8 / 12) * 100).toFixed(5) + '%',
    g9: ((9 / 12) * 100).toFixed(5) + '%',
    g10: ((10 / 12) * 100).toFixed(5) + '%',
    g11: ((11 / 12) * 100).toFixed(5) + '%',
    g12: ((12 / 12) * 100).toFixed(5) + '%',
  },
}