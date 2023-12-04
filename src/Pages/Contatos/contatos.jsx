import Menu from '../../components/Header/menus'
import Rodape from '../../components/Footer/footer'


function contatos(){
    return(
        <>
        <Menu />
        <figure>
            <img src= '../../public/0412.webp' alt= ' ' />
        </figure>
        <h1 class= 'tit1'>Fale Conosco</h1>
    
        <p>RJ - Barra da Tijuca (UNIDADE CENTRAL)
        <br/>
         Avenida Ayrton Senna, 23432
        </p>
        <p1>HORÁRIO DE FUNCIONAMENTO: </p1>
        <p2 > Seg a Sáb das 8H as 18H30</p2>
        <br/>
     <p2>TELEFONE GERAL: 21 3243-5477
        <br/>
        WHATSAPP : 21 9 7668-5433
        <br/>
        SAC: 0800 712 6500
    </p2>


        <Rodape />
        </>
    )
}

export default contatos