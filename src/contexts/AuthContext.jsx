import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            api.defaults.headers.Authorization = `Bearer ${token}`;
        }
        setLoading(false);
    }, []);

    const login = async (email, senha) => {
        try {
            const response = await api.post('/usuarios/login', { email, senha });
            const { token, usuario_id } = response.data;

            localStorage.setItem('token', token);
            api.defaults.headers.Authorization = `Bearer ${token}`;

            // Buscando os dados do usuário após o login
            const userResponse = await api.get('/usuarios/me');
            setUser(userResponse.data);

            navigate('/profile');
        } catch (error) {
            console.error("Erro no login:", error);
            alert('Falha no login. Verifique seu email e senha.');
        }
    };

    const register = async (userData) => {
        try {
            await api.post('/usuarios', userData);
            alert('Cadastro realizado com sucesso! Você já pode fazer o login.');
            navigate('/login');
        } catch (error) {
            console.error("Erro no registro:", error);
            alert('Falha no cadastro. Tente novamente.');
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = null;
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;