import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';

const RegisterPage = () => {
    return (
        <AuthLayout>
            <Form>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicCpf">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control type="text" placeholder="000.000.000-00"/>
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formBasicEndereco">
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicTelefone">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="tel" placeholder="(00) 00000-0000"/>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>

                <div className="d-grid gap-2">
                    <Button variant="warning" type="submit" className="mt-3">
                        Registrar
                    </Button>
                </div>

                <div className="text-center mt-3">
                    <Link to="/login" className="text-white-50">Já tem cadastro? Acesse sua conta.</Link>
                </div>
            </Form>
        </AuthLayout>
    );
};

export default RegisterPage;