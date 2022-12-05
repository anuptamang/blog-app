// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      family: {
        mulish: string
      },
      weight: {
        light: number,
        normal: number,
        medium: number,
        semibold: number,
        bold: number,
      }
      size: {
        s1: string,
        s2: string,
        s3: string,
        s4: string,
        s5: string,
        s6: string,
        s7: string,
        s8: string,
        s9: string,
      }
    },

    colors: {
      primary: string,
      primaryActive: string,
      secondary: string,
      secondaryActive: string,
      info: string,
      infoActive: string
      success: string,
      successActive: string,
      danger: string,
      dangerActive: string,
      text: string,
      textActive: string,
      body: string
      bodyActive: string
      articleBg: string
      footerBg: string
    }

    breakpoints: string[]

    device: {
      mobile: string,
      tablet: string,
      desktop: string,
      widescreen: string,
    }

    spacing: {
      s1: string,
      s2: string,
      s3: string,
      s4: string,
      s5: string,
      s6: string,
      s7: string,
      s8: string,
      s9: string,
      s10: string,
      s11: string,
      s12: string,
      s13: string,
      s14: string,
      s15: string,
      s16: string,
      s17: string,
      s18: string,
      s19: string,
      s20: string,
      s21: string,
      s22: string,
      s23: string,
      s24: string,
      s25: string,
    },
    grid: {
      g1: string,
      g2: string,
      g3: string,
      g4: string,
      g5: string,
      g6: string,
      g7: string,
      g8: string,
      g9: string,
      g10: string,
      g11: string,
      g12: string,
    },

  }
}