import { useNavigate } from 'react-router-dom';

// Importamos o MyNavbar que vamos usar
import { Container, Row, Col, Button, Card, Navbar } from 'react-bootstrap';
import heroImage from '../assets/images/home-bg-image.jpg';

const Hero = () => {
    // Style to Hero Component CSS
    let navigate = useNavigate();

    const heroStyle = {
        backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.7), rgba(10, 25, 47, 0.7)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
    };

    return (
        <div style={heroStyle}>
            {/* HEADER */}
            <Navbar variant="dark" expand="lg">
                <Container>
                    <h1 className="display-4 fw-bold pt-5">
                        Delive Keep
                    </h1>
                </Container>
            </Navbar>

            {/* Main Container */}
            <Container className="py-5">
                <Row className="align-items-center">
                    {/* Coluna da Esquerda: */}
                    <Col md={6}>
                        <Row></Row>
                    </Col>

                    {/* Coluna da Direita: */}
                    <Col md={6}>
                        <h1 className="display-4 fw-bold">Sua encomenda, no seu tempo.</h1>
                        <p className="lead my-4">
                            Compre online e retire seus produtos de forma prática, segura e no horário que você escolher.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-5" style={{backgroundColor : '#06205B', opacity:'0.75', borderRadius: '10px'}}>
                    <Col md={6} className="mb-3">
                        <Card text="white" className="h-100" style={{ background: 'none', border: 'none' }}>
                            <Card.Body>
                                <Card.Title >Entre na sua conta Delive Keep</Card.Title>
                                <Card.Text className='mt-4'>
                                    Acompanhe suas encomendas e encontre os pontos de retirada.
                                </Card.Text>
                                <Button variant="warning" onClick={() => { navigate("/login")}}>Entrar</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}
                         className="mb-3 border-start border-opacity-25 ps-4">
                        <Card text="white" className="h-100" style={{ background: 'none', border: 'none' }}>
                            <Card.Body>
                                <Card.Title>Ainda não tem conta?</Card.Title>
                                <Card.Text className='mt-4'>
                                    Crie seu cadastro e comece a aproveitar os nossos serviços.
                                </Card.Text>
                                <Button variant="warning" onClick={() => { navigate("/register")}}>Registrar</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hero;