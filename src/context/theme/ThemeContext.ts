import { createContext } from 'react';

interface ThemeProps {
  theme: string | null
  themeToggler: () => void
}

export const ThemeContext = createContext<ThemeProps>({
  theme: null,
  themeToggler: () => { }
})