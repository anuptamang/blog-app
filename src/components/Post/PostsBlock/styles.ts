import styled, { DefaultTheme } from 'styled-components'

export const S = {
  PostHolder: styled.div``,
  LoadMore: styled.div`
    padding: 50px 0;
    text-align: center;
  `,
  Row: styled.div`
    @media(${(props: { theme: DefaultTheme }) => props.theme.device.tablet}) {
      column-count: 3;

      column-gap: 30px;
    }
  `,
  Col: styled.div`
    margin-bottom: 40px;
    column-break-inside: avoid;
    -webkit-column-break-inside: avoid;
  `,
}
