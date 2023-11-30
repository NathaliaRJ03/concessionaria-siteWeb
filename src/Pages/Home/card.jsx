import './home.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function card() {
  return (
    <CardGroup>
      <Card>
        <Card.Img class= 'imag1' variant="top" src="../../../public/imag00.jpg" />
        <Card.Body>
          <Card.Title>Novo BMW X1</Card.Title>
          <Card.Text>
          A nova geração do BMW X1 foi anunciada oficialmente em junho. Além da adaptação de componentes mecânicos, a engenharia brasileira também testou e 
          validou todo o sistema de entretenimento. O destaque ficará por conta das versões eletrificadas.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img class= 'imag2' variant="top" src="../../../public/carro2.webp" />
        <Card.Body>
          <Card.Title>Renault Megane E-Tech</Card.Title>
          <Card.Text>
          O Renault Megane E-Tech vem em uma versão ainda mais sofisticada, com motor de 220 cv e 30,6 kgfm alimentado por baterias de 60 kWh, e que prometem uma boa autonomia de 470 km. Esse novo SUV elétrico ainda será capaz de acelerar de 0 a 100 km/h em 7,5 segundos e atingir 160 km/h, velocidade limitada eletronicamente. O interior do Mégane E-Tech segue as linhas modernas da parte de fora do carro, com uma grande tela do multimídia de 12 polegadas que 
          se une a do quadro de instrumentos de 12,3 polegadas, parecendo formar um só conjunto em formato de “L”
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img class= 'imag3' variant="top" src="../../../public/carro3.jpg" />
        <Card.Body>
          <Card.Title>Nissan Sentra</Card.Title>
          <Card.Text>
          Talvez esse novo modelo chegará na versão híbrida. Mas há outra versão com motor 2.0, a gasolina, de 151 cv, com câmbio CVT. Além de crescer de tamanho, segundo a 
          fabricante, a nova geração do Nissan Sentra ficou 12% mais potente e 13% mais “torcudo” que a geração anterior.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default card;