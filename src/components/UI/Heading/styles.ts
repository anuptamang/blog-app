import { DefaultTheme } from "styled-components";

type stylesProps = {
  global: any
}

export const styles: stylesProps = {
  global: {
    margin: 0,
    marginBottom: (props: { theme: DefaultTheme }) => props.theme.spacing.s6,
    color: (props: { theme: DefaultTheme }) => props.theme.colors.body,
    fontFamily: (props: { theme: DefaultTheme }) => props.theme.font.family.mulish,
    fontWeight: (props: { theme: DefaultTheme }) => props.theme.font.weight.bold,
    lineHeight: 1,
  },
}
