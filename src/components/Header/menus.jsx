

import { Link } from 'react-router-dom'
import './menu.css'

function menus(){
    return(
        <>
        <header className="menu">
            <Link to="/" > <span>Concessionária Nathy Br Carros </span> </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/contatos">Contatos</Link>
            </nav>
        
        
        </header>
        </>
    )
}

export default menus