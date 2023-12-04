
import Card from 'react-bootstrap/Card';

function card (){
    return (
    <Card className="bg-dark text-white">
      <Card.Img  className = 'carroG' src="../../public/nossa1.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title></Card.Title>
        <Card.Text>
        </Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}
export default card