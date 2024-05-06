import { Button, Container, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import Nav from 'react-bootstrap/Nav';


function Perfil(){

  const navigate = useNavigate();
  const handleClick = () => {
      navigate('/entrar');
  };

  return(
<>
  <Navbar>
    <Container>
      <Navbar.Brand href="/">Eco Praia</Navbar.Brand>

        <Nav className="me-auto">
        <Nav.Link href="#home">Equipe</Nav.Link>
            <Nav.Link href="#features">Contato</Nav.Link>
            <Nav.Link href="#projeto">Projeto</Nav.Link>
        </Nav>

<div className="navbar-btn">
  <Button type="button" variant="primary" onClick={handleClick}>Entrar</Button>
</div>
    
    </Container>
  </Navbar>
  <br/><br/><br/><br/>
    <section className="banner" id="home">
      <Container id="inicio">
        <Row className="align-items-center">
          
        </Row>
      </Container>

    </section>
</>
  );
};  

export default Perfil;
