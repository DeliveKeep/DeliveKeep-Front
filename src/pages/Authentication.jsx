import AuthForm from "../components/Auth/AuthForm.jsx";
import { json, redirect } from "react-router-dom";

export default function Authentication() {
    return (
        <AuthForm/>
    )
}

export async function action({request}) {
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get('mode') || 'login';

    if (mode !== 'login' && mode !== 'signup') {
        throw json(
            { message: 'Modo inválido.' },
            { status: 400 }
        );
    }

    const data = await request.formData();
    const email = data.get('email');
    const senha = data.get('senha');

    let authData = {
        email: email,
        senha: senha,
    };

    let url;

    if (mode === 'signup') {
        url = 'http://localhost:5000/clientes';
        authData = {
            ...authData,
            nome: data.get('nome'),
            cpf: data.get('cpf'),
            endereco: data.get('endereco'),
            telefone: data.get('telefone')
        };
    } else {
        url = 'http://localhost:5000/clientes/login';
    }

    console.log(authData);

    const response = await fetch(url,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(authData),
        });

    console.log(response.status);

    if (!response.ok) {
        return response;
    }

    if (mode === 'signup') {
        return redirect('?mode=login');
    }

    const resData = await response.json();
    const token = resData.token;
    const userId = resData.id;

    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);

    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem('expiration', expiration.toISOString());

    return redirect('/dashboard');
};