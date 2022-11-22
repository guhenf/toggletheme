import { DefaultTheme, ThemeProvider } from 'styled-components'
import Header from './components/header'
import GlobalStyle from './styles/global'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import usePersistedState from './utils/usePersistedTheme'
import Main from './components/main'

const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <div
        className='App'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Main />
      </div>
    </ThemeProvider>
  )
}

export default App
