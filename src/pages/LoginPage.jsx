import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import AuthContext from '../contexts/AuthContext.jsx';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    };

    return (
        <AuthLayout>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
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