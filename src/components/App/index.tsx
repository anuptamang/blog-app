import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { darkTheme, GlobalStyle, lightTheme } from '../../assets/styles'
import { PostProvider } from '../../context/app/post'
import { ThemeContext } from '../../context/theme/ThemeContext'
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
        <PostProvider>
          <AppRouter />
        </PostProvider>
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default App
