import styled, { DefaultTheme } from 'styled-components'
import List from '../../UI/List'

export const S = {
  SinglePage: styled.div`
    
  `,
  PostHolder: styled.div`
    padding: 50px 0;

    @media ${(props: { theme: DefaultTheme }) => props.theme.device.tablet} {
      padding: 165px 0;
    }
  `,

  PostDetail: styled.div`
    margin-bottom: 50px;

    @media ${(props: { theme: DefaultTheme }) => props.theme.device.tablet} {
      //
    }
  `,
  PostAuthor: styled.div`
    margin-bottom: 50px;
    border-radius: 40px;
    background: ${(props: { theme: DefaultTheme }) => props.theme.colors.boxBg};
    color: ${(props: { theme: DefaultTheme }) => props.theme.colors.text};
    padding: 30px;

    @media ${(props: { theme: DefaultTheme }) => props.theme.device.tablet} {
      //
    }

    p {
      margin: 0;
    }
  `,
  ReactionPanel: styled.div`
    padding: 0 0 50px 50px;

    @media ${(props: { theme: DefaultTheme }) => props.theme.device.tablet} {
      //
    }
  `,

  List: styled(List)`
    color: ${(props: { theme: DefaultTheme }) => props.theme.colors.text};
    gap: 30px;

     li {
      display: flex;
      align-items: center;
      gap: 15px;
     }
  `,
  Icon: styled.div<any>`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    cursor: pointer;
    position: relative;
    top: 0;
    transition: all 0.3s linear;
    color: ${(props: { theme: DefaultTheme }) => props.theme.colors.text};
    background: ${(props: { theme: DefaultTheme }) => props.theme.colors.boxBg};

    &.liked {
      background: ${(props: { theme: DefaultTheme }) => props.theme.colors.primary};
    }

    &:hover {
      top: -3px;
    }

    @media ${(props: { theme: DefaultTheme }) => props.theme.device.tablet} {
      //
    }
  `,
}
