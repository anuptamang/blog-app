import styled, { DefaultTheme } from 'styled-components'

type HeaderProps = {
  className?: any
}

export const S = {
  Header: styled.header<HeaderProps>`
    padding: 20px 0;
    background: ${(props: { theme: DefaultTheme }) => props.theme.colors.body};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    box-shadow: 0 0 0 1px rgba(0,0,0,0.05);
  `,

  Logo: styled.div`
    a {
      color: ${(props: { theme: DefaultTheme }) => props.theme.colors.text}
    }
  `
}
