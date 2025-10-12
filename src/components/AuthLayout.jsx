
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import warehouseImage from '../assets/images/warehouse-background.jpg';
import {Link} from "react-router-dom";

const AuthLayout = ({ children }) => {
    const imageColStyle = {
        backgroundImage: `url(${warehouseImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
    };

    const formColStyle = {
        backgroundColor: '#06205B',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 4rem',
    };

    return (
        <Container fluid>
            <Row>
                {/* Coluna da Esquerda: Formulário */}
                <Col md={5} style={formColStyle}>
                    <Link to="/" className="display-4 fw-bold mb-5 text-white" style={{textDecoration: 'none'}}>Delive Keep</Link>
                    <div className="text-white">
                        {/* Inputs to login or Register. */}
                        {children}
                    </div>
                </Col>

                {/* Coluna da Direita: Imagem */}
                <Col md={7} style={imageColStyle} className="d-none d-md-block">
                </Col>
            </Row>
        </Container>
    );
};

export default AuthLayout;