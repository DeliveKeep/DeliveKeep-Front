import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import CalendarIcon from '../assets/icons/CalendarCheck.svg';
import FlexibilityIcon from '../assets/icons/Graph.svg';
import SecurityIcon from '../assets/icons/LockSimple.svg';


const Features = () => {
    return (
        <Container className="text-start py-5">
            <Row>
                <Col>
                    <h2 className="display-5">Mais que entregas:</h2>
                    <h2 className="display-5 fw-bold" style={{color: '#ffc107'}}>comodidade e flexibilidade</h2>
                    <h2 className="display-5">para o seu dia a dia.</h2>
                    <p className="lead mt-4">
                        A Delive Keep nasceu para transformar a maneira como você recebe suas compras online. Sabemos
                        que muitas pessoas não conseguem estar em casa no momento da entrega, e isso limita o acesso ao
                        comércio eletrônico.
                    </p>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col md={4} className="text-center">
                    <img src={CalendarIcon} alt="Ícone de Calendário" className="mb-3"/>
                    <h3>Comodidade</h3>
                    <p>Você decide onde e quando retirar seu pedido, sem complicações.</p>
                </Col>

                <Col md={4} className="text-center">
                    <img src={SecurityIcon} alt="Ícone de Segurança" className="mb-3"/>
                    <h3>Segurança</h3>
                    <p>Locais de retirada seguros e com alta proteção para suas encomendas.</p>
                </Col>

                <Col md={4} className="text-center">
                    <img src={FlexibilityIcon} alt="Ícone de Flexibilidade" className="mb-3"/>
                    <h3>Flexibilidade</h3>
                    <p>Escolha entre diversos pontos de retirada próximos de casa ou do trabalho.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Features;