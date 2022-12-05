import styled, { DefaultTheme } from 'styled-components'

export const S = {
  Footer: styled.footer`
    padding: 100px 0;
  `,
  FooterInfo: styled.div``,
  FooterLogo: styled.div``,
  Copyright: styled.div``,
  FooterNav: styled.div`
    a {
      color: ${(props: { theme: DefaultTheme }) => props.theme.colors.info} ;
    }
  `,
}
