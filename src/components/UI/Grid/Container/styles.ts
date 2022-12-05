import styled, { DefaultTheme } from 'styled-components'

export const S = {
  Container: styled.div`
    margin-left: auto;
    margin-right: auto;
    padding-left: ${(props: { theme: DefaultTheme }) => props.theme.spacing.s6};
    padding-right: ${(props: { theme: DefaultTheme }) => props.theme.spacing.s6};
    max-width: 1480px;

    @media ${(props: { theme: DefaultTheme }) => props.theme.device.tablet} {
      /* width: 100%; */
    }
  `,
}
