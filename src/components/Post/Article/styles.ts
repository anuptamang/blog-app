import styled, { DefaultTheme } from 'styled-components'
import { Row } from '../../UI/Grid'
import { Icon } from '../../UI/Icon'

export const S = {
  Article: styled.article`
    border-radius: 20px;
    overflow: hidden;
    background: ${(props: { theme: DefaultTheme }) => props.theme.colors.articleBg} ;
  `,
  PostPanel: styled.div``,
  Row: styled(Row)`
    @media ${(props: { theme: DefaultTheme }) => props.theme.device.tablet} {
       flex-direction: row-reverse;
    }
  `,
  Icon: styled(Icon)``,
  ArticleHolder: styled.div``,
  TextHolder: styled.div`
    padding: 20px;
  `,
  Img: styled.div`

    img {
      display: block;
      max-width: none;
      width: 100%;
    }
  `,
}
