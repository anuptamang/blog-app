import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { darkTheme, GlobalStyle, lightTheme } from '../../assets/styles'
import { ThemeContext } from '../../context/ThemeContext'
import { useThemeMode } from '../../hooks/useThemeMode'
import AppRouter from '../../routes/AppRouter'

function App() {
  const [theme, themeToggler] = useThemeMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
      <Normalize />
      <GlobalStyle />
      <ThemeContext.Provider value={{ theme, themeToggler }}>
        <AppRouter />
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default App
