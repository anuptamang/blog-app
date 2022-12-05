import styled, { DefaultTheme } from 'styled-components'

export const S = {
  Select: styled.select`
    width: 100%;
     min-width: 195px;
     border-radius: 10px;
     background: ${(props: { theme: DefaultTheme }) => props.theme.colors.secondary};
     color: ${(props: { theme: DefaultTheme }) => props.theme.colors.info};
     height: 56px;
     font-size: 16px;
     line-height: 56px;
     padding: 0 20px;
     border: 0;
     margin: 0;
     -webkit-appearance: none;

     &:-ms-expand {
      display: none;
    }

  `,
  SelectHolder: styled.div`
    position: relative;
    margin: 20px 0;

    &:after {
      content:'';
      position: absolute;
      right: 20px;
      top: 18px;
      pointer-events: none;
      width: 14px;
      height: 14px;
      border: 2px solid ${(props: { theme: DefaultTheme }) => props.theme.colors.info};
      border-top: 0;
      border-right: 0;
      transform: rotate(-45deg);
    }
  `,
  Option: styled.option`
    /* text-transform: uppercase; */
  `,
}
