import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CallToAction = () => {
    return (
        <Container className="my-5 py-5">
            <Row>
                <Col className="text-center">
                    <h2>Pronto para <span style={{color: '#ffc107'}}>simplificar</span> a forma de receber suas encomendas?</h2>
                    <p className="mt-3">
                        Não perca tempo com entregas complicadas. Junte-se à Delive Keep e receba suas compras no seu tempo e do seu jeito.
                    </p>
                    <Button variant="warning" size="lg" className="mt-3">Juntar-se</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default CallToAction;