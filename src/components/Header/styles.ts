import styled, { DefaultTheme } from 'styled-components'

export const S = {
  Header: styled.header`
    padding: 20px 0;
  `,

  Logo: styled.div`
    a {
      color: ${(props: { theme: DefaultTheme }) => props.theme.colors.text}
    }
  `
}
