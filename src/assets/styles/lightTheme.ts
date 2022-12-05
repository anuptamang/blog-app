import { DefaultTheme } from 'styled-components';
import { common } from './general';

export const lightTheme: DefaultTheme = {
  ...common,
  colors: {
    primary: '#5458F7',
    primaryActive: '#5458G7',
    secondary: '#ddd',
    secondaryActive: '#303023',
    info: 'rgba(0,0,0, 0.5)',
    infoActive: 'rgba(0,0,0, 1)',
    success: '#8dc891',
    successActive: '#8dc892',
    danger: '#c54f5f',
    dangerActive: '#c54f6f',
    text: '#000',
    textActive: '#ddd',
    body: '#fff',
    bodyActive: '#131316',
    articleBg: '#f1f1f1',
    footerBg: '#ddd'
  }
};
