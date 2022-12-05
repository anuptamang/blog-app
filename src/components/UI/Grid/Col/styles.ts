import styled, { css, DefaultTheme } from 'styled-components'

const small = css`
  ${(props: any) =>
    props.sm === 1
      ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.mobile} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g1};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g1};
          }
        `
      : props.sm === 2
        ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.mobile} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g2};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g2};
          }
        `
        : props.sm === 3
          ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.mobile} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g3};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g3};
          }
        `
          : props.sm === 4
            ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.mobile} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g4};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g4};
          }
        `
            : props.sm === 5
              ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.mobile} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g5};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g5};
          }
        `
              : props.sm === 6
                ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.mobile} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g6};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g6};
          }
        `
                : props.sm === 7
                  ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.mobile} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g7};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g7};
          }
        `
                  : props.sm === 8
                    ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.mobile} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g8};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g8};
          }
        `
                    : props.sm === 9
                      ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.mobile} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g9};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g9};
          }
        `
                      : props.sm === 10
                        ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.mobile} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g10};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g10};
          }
        `
                        : props.sm === 11
                          ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.mobile} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g11};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g11};
          }
        `
                          : props.sm === 12
                            ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.mobile} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g12};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g12};
          }
        `
                            : css``}
`

const tablet = css`
  ${(props: any) =>
    props.md === 1
      ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.tablet} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g1};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g1};
          }
        `
      : props.md === 2
        ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.tablet} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g2};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g2};
          }
        `
        : props.md === 3
          ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.tablet} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g3};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g3};
          }
        `
          : props.md === 4
            ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.tablet} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g4};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g4};
          }
        `
            : props.md === 5
              ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.tablet} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g5};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g5};
          }
        `
              : props.md === 6
                ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.tablet} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g6};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g6};
          }
        `
                : props.md === 7
                  ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.tablet} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g7};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g7};
          }
        `
                  : props.md === 8
                    ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.tablet} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g8};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g8};
          }
        `
                    : props.md === 9
                      ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.tablet} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g9};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g9};
          }
        `
                      : props.md === 10
                        ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.tablet} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g10};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g10};
          }
        `
                        : props.md === 11
                          ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.tablet} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g11};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g11};
          }
        `
                          : props.md === 12
                            ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.tablet} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g12};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g12};
          }
        `
                            : css``}
`

const desktop = css`
  ${(props: any) =>
    props.lg === 1
      ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.desktop} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g1};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g1};
          }
        `
      : props.lg === 2
        ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.desktop} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g2};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g2};
          }
        `
        : props.lg === 3
          ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.desktop} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g3};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g3};
          }
        `
          : props.lg === 4
            ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.desktop} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g4};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g4};
          }
        `
            : props.lg === 5
              ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.desktop} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g5};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g5};
          }
        `
              : props.lg === 6
                ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.desktop} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g6};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g6};
          }
        `
                : props.lg === 7
                  ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.desktop} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g7};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g7};
          }
        `
                  : props.lg === 8
                    ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.desktop} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g8};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g8};
          }
        `
                    : props.lg === 9
                      ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.desktop} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g9};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g9};
          }
        `
                      : props.lg === 10
                        ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.desktop} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g10};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g10};
          }
        `
                        : props.lg === 11
                          ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.desktop} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g11};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g11};
          }
        `
                          : props.lg === 12
                            ? css`
          @media ${(props: { theme: DefaultTheme }) => props.theme.device.desktop} {
            flex: 0 0 ${(props: { theme: DefaultTheme }) => props.theme.grid.g12};
            max-width: ${(props: { theme: DefaultTheme }) => props.theme.grid.g12};
          }
        `
                            : css``}
`

export const S = {
  Col: styled.div`
    padding-left: ${({ px }: any) => (px ? `${px}px` : `15px`)};
    padding-right: ${({ px }: any) => (px ? `${px}px` : `15px`)};
    min-height: 1px;

    @media ${(props: { theme: DefaultTheme }) => props.theme.device.tablet} {
      width: 100%;
    }

    ${({ sm }: any) => (sm ? small : '')};
    ${({ md }: any) => (md ? tablet : '')};
    ${({ lg }: any) => (lg ? desktop : '')};
  `,
}
