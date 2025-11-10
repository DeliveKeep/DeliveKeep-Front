import { useLoaderData, json } from 'react-router-dom';
import Header from "../components/Header.jsx";
import UserProfileHeaderBGImage from "../assets/images/header-bg.jpg";
import CardManagerImg from "../assets/images/managerAccount-card-img.jpeg";
import ViewOrderImg from "../assets/images/viewOrder-card-img.jpeg";
import UserIcon from "../assets/icons/UserIcon.svg"
import Card from "../components/Card.jsx";
import PageTitle from "../components/PageTitle.jsx";
import LastOrders from "../components/Orders/LastOrders.jsx";
import { getAuthToken, getUserId, checkAuthLoader } from '../util/auth.js';

export default function UserDashboard() {
    const { user, orders } = useLoaderData();

    return (
        <div className="flex flex-col bg-primary-blue">
            <div className="h-fit md:min-h-screen">
                <Header props={{image: UserProfileHeaderBGImage}}/>
                <main className="w-full container m-auto text-white md:">
                    <PageTitle props={{
                        icon: UserIcon,
                        text : `Olá, ${user.nome} !`
                    }}/>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                        <Card props={{
                            image: CardManagerImg,
                            title: 'Gerencie sua Conta',
                            description: 'Aqui você encontra todas as informações do seu perfil, pode atualizar seus dados, adicionar novos endereços e ajustar suas preferências de notificação.',
                            link: '/profile'
                        }}/>
                        <Card props={{
                            image: ViewOrderImg,
                            title: 'Monitore suas encomendas',
                            description: 'Consulte o status das suas entregas, visualize os prazos de retirada e acesse o histórico completo dos seus pedidos. Tudo em um só lugar.',
                            link: '/orders'
                        }}/>
                    </div>
                </main>
            </div>

            <LastOrders orders={orders}/>
        </div>
    )
}

export async function loader() {
    const authCheck = checkAuthLoader();
    if (authCheck) {
        return authCheck;
    }

    const token = getAuthToken();
    const userId = getUserId();

    const userResponse = fetch('http://localhost:5000/clientes/' + userId, {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    });

    const ordersResponse = fetch('http://localhost:5000/encomendas/cliente', {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    });

    const [userRes, ordersRes] = await Promise.all([userResponse, ordersResponse]);

    if (!userRes.ok) {
        throw json({ message: 'Não foi possível carregar dados do usuário.' }, { status: 500 });
    }
    if (!ordersRes.ok) {
        throw json({ message: 'Não foi possível carregar encomendas.' }, { status: 500 });
    }


    console.log(ordersRes);

    const user = await userRes.json();
    const orders = await ordersRes.json();

    return { user, orders };
}