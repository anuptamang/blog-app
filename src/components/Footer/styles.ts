import styled, { DefaultTheme } from 'styled-components'

export const S = {
  Footer: styled.footer`
    padding: 100px 0;
    background: ${(props: { theme: DefaultTheme }) => props.theme.colors.footerBg} ;
  `,
  FooterInfo: styled.div`
    margin-bottom: 20px;
    color: ${(props: { theme: DefaultTheme }) => props.theme.colors.info} ;
  `,
  FooterLogo: styled.div`
    margin-bottom: 20px;
  `,
  Copyright: styled.div`
    margin-bottom: 20px;
  `,
  FooterNav: styled.div`
  margin-bottom: 20px;
  
    a {
      color: ${(props: { theme: DefaultTheme }) => props.theme.colors.info} ;
    }
  `,
}
