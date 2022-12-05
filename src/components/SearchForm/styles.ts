import styled, { DefaultTheme } from 'styled-components'
import { Icon } from '../UI/Icon'

export const S = {
  Form: styled.form`
    position: relative;
    border-radius: 8px;
    background: ${(props: { theme: DefaultTheme }) => props.theme.colors.secondary};

  `,
  Input: styled.input`
    padding: 4px 20px 4px 50px;
    color: ${(props: { theme: DefaultTheme }) => props.theme.colors.info};
    font-size: 16px;
    line-height: 20px;
    width: 100%;
    background: none;
    border: 0;
    margin: 0;
    outline: none;
    height: 56px;

    &:placeholder {
      color: ${(props: { theme: DefaultTheme }) => props.theme.colors.info};
    }
  `,
  IconHolder: styled(Icon)`
    position: absolute;
    left: 20px;
    top: 17px;
    z-index: 2;
    color: ${(props: { theme: DefaultTheme }) => props.theme.colors.info};
    font-size: 22px;

  `
}
