import { BrowserRouter, Routes, Route } from 'react-router-dom'
//BrowserRouter -> Para iniciar el ruteado, el cómo se va a navegar.
//Routes        -> La lista de rutas que se va a ocupar.
//Route         -> La ruta como tal.
import Home from '../pages/Home'
import Reglamentos from '../pages/Reglamentos'
import Noticias from '../pages/Noticias'

function MyRoutes() {
    return (
        <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/reglamentos' element={ <Reglamentos/> } />
            <Route path='/noticias' element={ <Noticias/> } />
        </Routes>    
    )
}

export default MyRoutes