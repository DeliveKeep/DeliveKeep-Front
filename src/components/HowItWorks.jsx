import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Storefront from '../assets/icons/Storefront.svg';
import CursorIcon from '../assets/icons/CursorIcon.svg';
import ClockIcon from '../assets/icons/ClockIcon.svg';

const HowItWorks = () => {
    return (
        <Container className="text-center my-5 py-5">
            <h2 className="text-start display-8 fw-bold">Com a <span style={{color: '#ffc107'}}>Delive Keep</span>, receber suas encomendas é simples assim:</h2>
            <Row className="mt-5 align-items-center">
                <Col md={4}>
                    <div>
                        <h4>Compre online</h4>
                        <img src={Storefront} alt="Storefront logo" className="p-4 border rounded-circle mx-auto mt-3" style={{width: '150px', height: '150px'}}/>

                    </div>
                </Col>
                <Col md={4}>
                    <div>
                        <h4>Escolha a Delive Keep</h4>
                        <img src={CursorIcon} alt="Cursor logo" className="p-4 border rounded-circle mx-auto mt-3" style={{width: '150px', height: '150px'}}/>

                    </div>
                </Col>
                <Col md={4}>
                    <div >
                        <h4>Retire no seu tempo</h4>
                        <img src={ClockIcon} alt="Clock logo" className="p-4 border rounded-circle mx-auto mt-3" style={{width: '150px', height: '150px'}}/>

                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default HowItWorks;