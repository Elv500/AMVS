import MyRoutes from "./routers/routes"
import Sidebar from "./components/Sidebar"
import Container from '@mui/material/Container'
import React from "react"

import Button from '@mui/material/Button'
import { useTheme } from "./styles/ThemeContextProvider"

function App() {

  const {theme,toggleTheme} = useTheme();

  return (
    <>
      <Container>
        <Button variant="contained" color="primary" onClick={toggleTheme} >
          Cambiar Modo
        </Button>
        <Sidebar />
        <MyRoutes />  
      </Container>   
    </>
  )
}

export default App