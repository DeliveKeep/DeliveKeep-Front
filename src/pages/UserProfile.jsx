import React, { useContext } from 'react';
import MyNavbar from "../components/MyNavbar.jsx";
import Welcome from "../components/Profile/Welcome.jsx";
import LastOrders from "../components/Profile/LastOrders.jsx";
import AuthContext from '../contexts/AuthContext.jsx';

export default function UserProfile() {
    const { user } = useContext(AuthContext);

    // Se os dados do usuário ainda não foram carregados, exibe um loading
    if (!user) {
        return <div>Carregando perfil...</div>
    }

    return (
        <div style={{backgroundColor: '#06205B', minHeight: '100vh', color: 'white'}}>
            <MyNavbar />
            <Welcome name={user.nome} /> {/* Passa o nome do usuário para o componente Welcome */}
            <LastOrders />
        </div>
    )
}