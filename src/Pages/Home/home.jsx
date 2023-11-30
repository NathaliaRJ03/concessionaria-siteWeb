import Menu from '../../components/Header/menus'
import Rodape from '../../components/Footer/footer'
import Carrosel from './corrosel'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './card'



function home(){
    return(
        <>
        <Menu />
        <Carrosel/>
        <h1>Home</h1>
        <p>Bem-vindo ao amanhã, hoje.



 Somos a concessionária Nathy Br Car, a nova marca do Grupo Lider no Rio de Janeiro, na Zona Oeste.
Há mais de 10 anos, o Grupo Lider atua no mercado automotivo com 15 concessionárias presentes no estado. 
 Os veículos da marca alinham tecnologia e sustentabilidade, 
 para criar uma nova experiência de direção mais limpa, conectada, potente e inteligente com você no comando. O futuro chegou.</p>
        


        <Card/>
        <Rodape />
        </>
    )
}

export default home