import Catalog from "../../features/catalog/Catalog"
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import Header from "./Header"
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';


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
      <Router>
        <Container>
          <Routes>
            <Route path="/" element={<Catalog />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  )
}

export default App
