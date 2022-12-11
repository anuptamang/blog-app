import styled, { DefaultTheme } from 'styled-components'
import { Container } from '../Grid'

export const S = {
  BannerHolder: styled.div`
   position: relative;
   height: 350px;
   background: ${(props: { theme: DefaultTheme }) => props.theme.colors.body};
   color: ${(props: { theme: DefaultTheme }) => props.theme.colors.text};
   z-index: 1;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 50px 0;
   text-align: center;

   @media ${(props: { theme: DefaultTheme }) => props.theme.device.tablet} {
      height: 510px;
    }
  `,

  Container: styled(Container)`
    width: 100%;
  `
}
