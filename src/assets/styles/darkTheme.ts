import { DefaultTheme } from 'styled-components';
import { common } from './general';

export const darkTheme: DefaultTheme = {
  ...common,
  colors: {
    primary: '#5458F7',
    primaryActive: '#5458G7',
    secondary: '#303033',
    secondaryActive: '#303023',
    info: 'rgba(255,255,255, 0.5)',
    infoActive: 'rgba(255,255,255, 1)',
    success: '#8dc891',
    successActive: '#8dc892',
    danger: '#c54f5f',
    dangerActive: '#c54f6f',
    text: '#fff',
    textActive: '#ddd',
    body: '#131313',
    bodyActive: '#131316',
    articleBg: '#191A1D',
    footerBg: '#1E1E1E'
  }
}