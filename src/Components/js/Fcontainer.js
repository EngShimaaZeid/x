import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fcard from './Fcard.js';
import Flist from './Flist.js';

import Secondmenu from "./Secondmenu.js";
import Fcarousel from "./Fcarousel.js"

function ContainerExample() {
  return (
    <Container>
    {/* Stack the columns on mobile by making one full-width and the other half-width */}
    <Row class="containerrow" >
      
      <Col xs={6} md={2} class="co" >
      </Col>
      <Col xs={12} md={8}  >
        <Secondmenu/>
        <h4 className="mt-4 mb-5 zain-bold">
        <strong>أخر الفعاليات</strong>
      </h4> 
        <Fcarousel/>
      </Col>
    </Row>
    <Fcard/>
    <Row class="containerrow"  style={{backgroundColor:"#F3F7FB"}}> 
      <Col xs={6} md={6} class="co" style={{padding:10}} >
        <Flist/>
      </Col>
      <Col xs={12} md={6}  >
        <a class="navbar-brand responsive" style={{padding:'20%'}}><img src='./imgs/calender.png'/></a>
      </Col>
    </Row>
    </Container>

    

  );
}

export default ContainerExample;