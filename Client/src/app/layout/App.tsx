import Catalog from "../../features/catalog/Catalog"
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import Header from "./Header"
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import HomePage from "../../features/home/HomePage";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";


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
      <Router>
        <Header darkMode={darkMode} changeDarkMode={changeDarkMode}/>
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  )
}

export default App
