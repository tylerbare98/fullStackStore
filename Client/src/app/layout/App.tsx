import Catalog from "../../features/catalog/Catalog"
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import Header from "./Header"
import { useState } from "react"

function App() {

  const [darkMode, setDarkMode] = useState(true);
  const mode = darkMode ? "dark": "light";

  const theme = createTheme({
    palette: {
      mode: mode,
      background: {
        default: mode === "light" ? "#eaeaea" : "#121212"
      }
    }
  })

  const changeDarkMode = () => {
    setDarkMode(prevState => !prevState);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header darkMode={darkMode} changeDarkMode={changeDarkMode}/>
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  )
}

export default App
