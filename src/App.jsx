import MyRoutes from "./routers/routes"
import Sidebar from "./components/Sidebar"
import Container from '@mui/material/Container'
import React, { useState } from "react"

import Button from '@mui/material/Button'
import { ThemeProvider, CssBaseline } from "@mui/material"
import { modeLight, modeDark } from "./styles/Theme"

function App() {

  const [theme,setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? modeLight : modeDark}>
        <CssBaseline />
        <Container>
            <Button variant="contained" color="primary" onClick={toggleTheme} >
              Cambiar Tema
            </Button>
            <Sidebar />
            <MyRoutes />  
          </Container>
      </ThemeProvider>    
    </>
  )
}

export default App