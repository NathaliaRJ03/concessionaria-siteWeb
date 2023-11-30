//bibliotecas para configurara as rotas de nosso site
import { BrowserRouter, Route, Routes } from "react-router-dom";

//mapear as páginas (contatos, home, projetos e sobre)
import Home from './Pages/Home/home'
import Contatos from './Pages/Contatos/contatos'
import Projetos from './Pages/Projetos/projetos'
import Sobre from './Pages/Sobre/sobre'

function AppRouter()
{
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } ></Route>
                <Route path="/sobre" element={ <Sobre /> }></Route>
                <Route path="/projetos" element={ <Projetos /> } ></Route>
                <Route path="/contatos" element={ <Contatos /> } ></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default AppRouter
