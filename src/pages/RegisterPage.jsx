import React, { useState, useContext } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import AuthContext from '../contexts/AuthContext';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        nome: '',
        cpf: '',
        endereco: '',
        telefone: '',
        email: '',
        senha: ''
    });
    const [errors, setErrors] = useState({});
    const { register } = useContext(AuthContext);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const validateForm = () => {
        console.log("Iniciando validação do formulário...");
        const newErrors = {};

        // Validação do nome
        if (!formData.nome || formData.nome.length < 2) {
            newErrors.nome = 'O nome deve ter pelo menos 2 caracteres.';
        }
        // Validação do CPF
        if (!formData.cpf || !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(formData.cpf)) {
            newErrors.cpf = 'CPF inválido. Use o formato 000.000.000-00.';
        }
        // Validação do Endereço
        if (!formData.endereco) {
            newErrors.endereco = 'O endereço é obrigatório.';
        }
        // Validação do Telefone
        if (!formData.telefone || !/^\(\d{2}\) \d{5}-\d{4}$/.test(formData.telefone)) {
            newErrors.telefone = 'Telefone inválido. Use o formato (00) 00000-0000.';
        }
        // Validação do Email
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email inválido.';
        }
        // Validação da Senha
        if (!formData.senha || formData.senha.length < 6) {
            newErrors.senha = 'A senha deve ter pelo menos 6 caracteres.';
        }

        console.log("Erros encontrados:", newErrors);
        setErrors(newErrors);

        // Retorna true se não houver erros, e false caso contrário
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Tentativa de envio do formulário com os dados:", formData);

        // Valida o formulário antes de enviar
        if (validateForm()) {
            console.log("Validação passou! Enviando para a API...");
            await register(formData);
        } else {
            console.log("Validação falhou! O formulário não foi enviado.");
        }
    };

    return (
        <AuthLayout>
            <Form onSubmit={handleSubmit} noValidate>
                {/* O noValidate impede a validação padrão do navegador */}

                {Object.keys(errors).length > 0 && (
                    <Alert variant="danger">
                        Por favor, corrija os erros no formulário.
                    </Alert>
                )}

                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="nome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={handleChange}
                                isInvalid={!!errors.nome} // Adiciona estilo de erro
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.nome}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="cpf">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="000.000.000-00"
                                onChange={handleChange}
                                isInvalid={!!errors.cpf}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.cpf}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="endereco">
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={handleChange}
                        isInvalid={!!errors.endereco}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.endereco}
                    </Form.Control.Feedback>
                </Form.Group>

                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="telefone">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="(00) 00000-0000"
                                onChange={handleChange}
                                isInvalid={!!errors.telefone}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.telefone}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="senha">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        type="password"
                        onChange={handleChange}
                        isInvalid={!!errors.senha}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.senha}
                    </Form.Control.Feedback>
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