import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from './Card.js';
import Secondmenu from "./Secondmenu.js";
import Sidebar from "./Sidebar.js";

function ContainerExample() {
  return (
    <Container>
    {/* Stack the columns on mobile by making one full-width and the other half-width */}
    <Row class="containerrow" >
      
      <Col xs={6} md={4} class="co" >
        <Sidebar/>
      </Col>
      <Col xs={12} md={8}  >
        <Secondmenu/>
      <Card/>
        
      </Col>
    </Row>
    </Container>

    

  );
}

export default ContainerExample;