import styled, { css, DefaultTheme } from 'styled-components'

const alignItems = css`
  ${(props: any) =>
    props.alignItems === 'center'
      ? css`
          align-items: center;
        `
      : props.alignItems === 'end'
        ? css`
          align-items: flex-end;
        `
        : css`
          align-items: flex-start;
        `}
`
const justifyContent = css`
  ${(props: any) =>
    props.justifyContent === 'center'
      ? css`
          justify-content: center;
        `
      : props.justifyContent === 'end'
        ? css`
          justify-content: flex-end;
        `
        : props.justifyContent === 'between'
          ? css`
          justify-content: space-between;
        `
          : css`
          justify-content: flex-start;
        `}
`

export const S = {
  Row: styled.div`
    margin-left: ${({ mx }: any) => (mx ? `-${mx}px` : `-15px`)};
    margin-right: ${({ mx }: any) => (mx ? `-${mx}px` : `-15px`)};
    flex-wrap: wrap;

    @media ${(props: { theme: DefaultTheme }) => props.theme.device.tablet} {
      display: flex;
      ${alignItems};
      ${justifyContent};
    }
  `,
}
