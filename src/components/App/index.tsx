import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { darkTheme, GlobalStyle, lightTheme } from '../../assets/styles'
import { ThemeContext } from '../../context/ThemeContext'
import { useThemeMode } from '../../hooks/useThemeMode'
import AppRouter from '../../routes/AppRouter'
import API from '../../services/api'
import { getAllPost } from '../../services/api/post'

function App() {
  const [theme, themeToggler] = useThemeMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme
  const [data, setData] = useState<any>([])

  useEffect(() => {
    // API.get('/posts').then((res) => console.log(res.data))
    // API.get('/posts/1').then((res) => console.log(res.data))
    // API.get('/users').then((res) => console.log(res.data))
    // API.get('/users/1').then((res) => console.log(res.data))
    // API.get('/comments').then((res) => console.log(res.data))
    // API.get('/comments/1').then((res) => console.log(res.data))

    getAllPost(setData)
  }, [])

  console.log(data)

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
