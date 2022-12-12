import styled, { DefaultTheme } from 'styled-components'

export const S = {
  Comments: styled.div`
   background: ${(props: { theme: DefaultTheme }) => props.theme.colors.body};
   color: ${(props: { theme: DefaultTheme }) => props.theme.colors.text};
   padding-left: 50px;
   margin-bottom: 50px;

   @media ${(props: { theme: DefaultTheme }) => props.theme.device.tablet} {
      //
    }
  `,
  PrimaryComment: styled.div`
    display: flex;
  `,
  Avatar: styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props: { theme: DefaultTheme }) => props.theme.colors.primaryActive};
    color: ${(props: { theme: DefaultTheme }) => props.theme.colors.text};
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
    text-align: center;
  `,
  CommentsBox: styled.div`
    width: calc(100% - 70px);
    margin-left: 20px;
    max-width: 520px;
     
  `,
  CommentDetail: styled.div`
    background: ${(props: { theme: DefaultTheme }) => props.theme.colors.boxBg};
    padding: 30px;
    border-radius: 40px;
    margin-bottom: 30px;
  `,
  Text: styled.div``,
  CommentPane: styled.div`
    padding-left: 30px;
    font-weight: 700;
    margin-bottom: 20px;
  `,
  More: styled.div`
    padding-left: 100px;
    color: ${(props: { theme: DefaultTheme }) => props.theme.colors.info};
    font-weight: 700;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  `,
  CommentBox: styled.div`
    padding-left: 50px;
  `,
}
