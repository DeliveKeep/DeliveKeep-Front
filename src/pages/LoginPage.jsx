import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';

const LoginPage = () => {
    return (
        <AuthLayout>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Value" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Value" />
                </Form.Group>

                <div className="d-grid gap-2">
                    <Button variant="warning" type="submit" className="mt-3">
                        Entrar
                    </Button>
                </div>

                <div className="text-center mt-3">
                    <Link to="/profile" className="text-white-50 d-block mb-2">Esqueceu-se da sua senha?</Link>
                    <Link to="/register" className="text-white-50">Sem conta? Cadastre-se</Link>
                </div>
            </Form>
        </AuthLayout>
    );
};

export default LoginPage;