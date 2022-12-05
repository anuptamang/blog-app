import { useEffect, useState } from 'react';

export const useThemeMode = () => {
  const [theme, setTheme] = useState<string>('dark');

  const setMode = (mode: string) => {
    localStorage.setItem('theme', mode)
    setTheme(mode)
  };

  const themeToggler = () => {
    theme === 'light' ? setMode('dark') : setMode('light')
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    localTheme && setTheme(localTheme)
  }, []);
  return [theme, themeToggler] as const
};