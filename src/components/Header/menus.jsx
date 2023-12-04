

import { Link } from 'react-router-dom'
import './menu.css'

function menus(){
    return(
        <>
        <header className="menu">
            <Link to="/" > <span>Concessionária Nathy Br Car </span> </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/sobre">Nossa História</Link>
                <Link to="/contatos">Fale conosco</Link>
                <Link to="/projetos">Política de Qualidade</Link>
            </nav>
        
        
        </header>
        </>
    )
}

export default menus