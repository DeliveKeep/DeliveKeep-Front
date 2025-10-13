import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Welcome = ({ name }) => { // Recebe 'name' como prop
    return (
        <Container className="text-white my-5">
            <Row>
                <Col>
                    <h1 className="display-4">Olá, {name}.</h1> {/* Usa o nome recebido */}
                    <p className="lead">Tudo em um só lugar.</p>
                </Col>
            </Row>
            {/* O restante do componente permanece o mesmo... */}
            <Row className="mt-4">
                <Col md={6} className="mb-4">
                    <Card className="h-100 bg-dark text-white">
                        <Card.Body>
                            <Card.Title as="h3">Gerencie sua conta</Card.Title>
                            <Card.Text>
                                Aqui você encontra todas as informações do seu perfil,
                                pode atualizar seus dados, adicionar novos endereços e
                                ajustar suas preferências de notificação.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} className="mb-4">
                    <Card className="h-100 bg-dark text-white">
                        <Card.Body>
                            <Card.Title as="h3">Monitore suas encomendas</Card.Title>
                            <Card.Text>
                                Consulte o status das suas entregas, visualize os prazos
                                de retirada e acesse o histórico completo dos seus pedidos.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Welcome;