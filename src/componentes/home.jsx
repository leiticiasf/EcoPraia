import React, {useState} from "react";
import { Container, Navbar, Nav, Button, Carousel, Row, Col, } from "react-bootstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";
import banner from "../assets/dancarcomvoce.jpg";
import projeto from "../assets/images.jpg";
import Equipe from "./Equipe";



function Home () {
  const navigate = useNavigate();
    const handleClick = () => {
        navigate('/entrar');
    };

    const data = [
      { id: 1, 
        title: 'Informação 1',
        image: projeto,
        content: 'Conteúdo da informação 1',
       },
      { id: 2, 
        title: 'Informação 2',
        image: projeto,
        content: 'Conteúdo da informação 2' },
      { id: 3, 
        title: 'Informação 3',
        image: projeto,
        content: 'Conteúdo da informação 3' },
     
    ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
      };
    
      const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
      };
    
    return( 
        <>      
   <Navbar>
        <Container>
          <Navbar.Brand href="#home"> 
          Eco Praia
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link href="#home">Equipe</Nav.Link>
            <Nav.Link href="#features">Contato</Nav.Link>
            <Nav.Link href="#projeto">Projeto</Nav.Link>
          </Nav>

          <div className="navbar-btn">
          <Button type="button" variant="primary" onClick={handleClick}> Entrar
            </Button>
      </div>
        </Container>
      </Navbar>
<br/><br/><br/><br/>

     <section className="banner" id="home">
            <Container id="containerEntrar">
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                       <h1>Sobre o Mapa </h1>
                       <p>Durante a alta temporada e dias de calor, observa-se um aumento significativo no volume de resíduos nas áreas de trilha ao redor de Florianópolis. As paisagens paradisíacas se veem sobrecarregadas por detritos de diversos tipos: calçados, plásticos, embalagens de alimentos e papel descartado.
                      O propósito deste mapa é fornecer uma visualização dos pontos de coleta de resíduos já identificados dentro da ilha de Floripa, com o intuito de reduzir o acúmulo de detritos e trazer a conscientização pública.

</p>
                       <p> Clique para ampliar o mapa e localize os pontos de coleta mais próximos de você!</p>
                    </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img id="bannerMapa" src={banner} alt="Header img" />
                        </Col>
                </Row>
            </Container>
        </section>

        <br/><br/><br/><br/>
        <br/><br/><br/><br/>
        <br/><br/><br/><br/>



        <section className="banner" id="projeto">
            <Container id="inicio">
                <Row className="align-items-center">
                  <h1>Sobre o projeto</h1>
                    <Col xs={12} md={6} xl={7}>
                    <h2>{data[currentIndex].title}</h2>
                    <img src={data[currentIndex].image} alt={data[currentIndex].title} /> 
                    <p>{data[currentIndex].content}</p>
                    <div className="navbar-btn">
                    <Button type="button" variant="primary" onClick={handlePrevious}>Previous</Button> &nbsp;
                    <Button type="button" variant="primary" onClick={handleNext}>Next</Button>
                    </div>
                    </Col>
                        <Col xs={12} md={6} xl={5}>
                        </Col>
                </Row>
            </Container>
            <br/><br/><br/><br/>
        </section>
    
    <Equipe/>



    </>

);}

export default Home;