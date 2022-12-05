import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-size:  ${({ theme }) => theme.font.size.s2};
    line-height: 1.3;
    font-family:  ${({ theme }) => theme.font.family.mulish};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media ${({ theme }) => theme.device.tablet} {
      font-size: ${({ theme }) => theme.font.size.s4};
    }

    @media ${({ theme }) => theme.device.desktop} {
      font-size: ${({ theme }) => theme.font.size.s5};
    }
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  img {
    display: inline-block;
    vertical-align: top;
    max-width: 100%;
    height: auto;
  }
`
