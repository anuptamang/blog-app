import styled, { css } from 'styled-components'

type ListProps = {
  alignItems?: string
  justifyContent?: string
  type?: string
}

export const S = {
  List: styled.ul`
     ${(props: ListProps) => {
      switch (props.type) {
        case "inline":
          return css`
            display: flex;
            flex-wrap: wrap;
            margin: 0 -5px;
        `;
        default:
          return css``;
      }
    }}

    ${(props: ListProps) => {
      switch (props.alignItems) {
        case "center":
          return css`
            align-items: center;
        `;
        case "end":
          return css`
            align-items: flex-end;
        `;
        default:
          return css`
            align-items: flex-start;
        `;
      }
    }}

     ${(props: ListProps) => {
      switch (props.justifyContent) {
        case "center":
          return css`
            justify-content: center;
        `;
        case "end":
          return css`
            justify-content: flex-end;
        `;
        case "between":
          return css`
            justify-content: space-between;
        `;
        default:
          return css`
            justify-content: flex-start;
        `;
      }
    }}

    li {
      ${(props: ListProps) => {
      switch (props.type) {
        case "inline":
          return css`
              padding: 5px;
          `;
        default:
          return css`
              padding-bottom: 10px;
            `;
      }
    }}
    }
  `,
}
