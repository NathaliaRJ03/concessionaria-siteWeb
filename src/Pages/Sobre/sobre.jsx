import Menu from '../../components/Header/menus'
import Rodape from '../../components/Footer/footer'
import Conteudo from './conteudo'
import Card from './card'

function sobre(){
    return(
        <>
        <Menu />
        <h1>NOSSA HISTÓRIA</h1>
        <p1>A Original Concessionárias está no mercado oferecendo o melhor em matéria de veículos novos, 
            seminovos e serviços automotivos.
            Ao todo são 15 lojas divididas em três
            bandeiras de diferentes montadoras: Original 
            VW, Fiat Ponto e Ford Avante entre outras. Representando inclusive um dos maiores grupos de 
            concessionárias da Fiat e Citroen no Brasil. 
            A companhia tem um grande portfólio 
            de serviços pós-venda e de seguros por meio da Madre Corretora de Seguros e forte sinergia com outros negócios do Grupo.</p1>
        <Conteudo />
        < Card/>
        <Rodape />
        </>
    )
}

export default sobre