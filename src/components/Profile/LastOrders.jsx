import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// Dados mocados (simulados) para os pedidos
const orders = [
    {
        code: '123456789',
        pickupPoint: 'Rua das Flores, 123 - Centro',
        date: '01/01/2026',
        status: 'Disponível para retirada'
    },
    {
        code: '987654321',
        pickupPoint: 'Av. Principal, 456 - Bairro Norte',
        date: '02/01/2026',
        status: 'Entregue'
    },
    {
        code: '112233445',
        pickupPoint: 'Shopping Central, Loja C',
        date: '03/01/2026',
        status: 'Aguardando envio'
    }
];

const LastOrders = () => {
    return (
        <Container className="text-white my-5">
            <h2 className="mb-4">Últimos pedidos</h2>
            {orders.map((order, index) => (
                <Card key={index} className="mb-3 bg-dark text-white">
                    <Card.Body>
                        <Row className="align-items-center">
                            <Col md={3}>
                                <h6>Código do pedido</h6>
                                <p>{order.code}</p>
                            </Col>
                            <Col md={3}>
                                <h6>Ponto de entrega/retirada</h6>
                                <p>{order.pickupPoint}</p>
                            </Col>
                            <Col md={2}>
                                <h6>Data de entrega/retirada</h6>
                                <p>{order.date}</p>
                            </Col>
                            <Col md={2}>
                                <h6>Status:</h6>
                                <p className="text-warning fw-bold">{order.status}</p>
                            </Col>
                            <Col md={2} className="text-end">
                                <Button variant="outline-light" size="sm" className="me-2">Ver pedido</Button>
                                <Button variant="outline-secondary" size="sm">Contatar suporte</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
};

export default LastOrders;