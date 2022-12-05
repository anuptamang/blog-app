import styled, { DefaultTheme } from 'styled-components'

export const S = {
  Main: styled.main`
    padding-top: 60px;

    @media(${(props: { theme: DefaultTheme }) => props.theme.device.desktop}) {
      padding-top: 70px;
    }
  `
}
