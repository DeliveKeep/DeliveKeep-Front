import { useLoaderData, json } from 'react-router-dom';
import Header from "../components/Header.jsx";
import OrderHeaderBgImage from "../assets/images/order-bg-img.jpeg";
import OrderCard from "../components/Orders/OrderCard.jsx";
import {useState} from "react";
import ModalLayout from "../components/Modal/ModalLayout.jsx";
import { getAuthToken, getUserId, checkAuthLoader } from '../util/auth.js';

export default function OrderDetails() {
    const [modalActive, setModalActive] = useState(null);
    const { order, user } = useLoaderData();

    const closeModal = () => {
        setModalActive(null);
    };

    const orderMap = (orderData) => {
        const orderDetails = [
            {id: 1, title: 'Código do Pedido', content: orderData.codigo_rastreamento},
            {id: 2, title: 'Ponto de retirada (Galpão ID)', content: orderData.id_galpao},
            {id: 4, title: 'Status:', content: orderData.status_pedido},
            {id: 5, title: 'Nome e endereço do remetente', content: orderData.nome_remetente},
            {id: 6, title: 'Endereço do remetente', content: orderData.endereco_remetente},
            {id: 7, title: 'Medidas', content: `${orderData.altura}cm x ${orderData.largura}cm x ${orderData.comprimento}cm`},
            {id: 8, title: 'Peso do Pedido:', content: `${orderData.peso}kg`},
        ];
        return orderDetails;
    }

    return (
        <div className="bg-primary-blue w-full h-fit flex flex-col flex-grow md:min-h-screen ">
            <Header props={{image: OrderHeaderBgImage}}/>
            <main className="flex flex-col container m-auto text-white">
                <div
                    className="container flex flex-col justify-start p-10 md:flex-row md:justify-between md:mx-auto max-w-full max-h-full ">
                    <img className="object-cover mb-10 md:mb-0 w-60 h-60 md:w-80 md:h-80 bg-fade" src="#"/>
                    <div className="md:max-w-1/2 flex flex-col flex-wrap justify-between items-start basis-5xl">
                        <h1 className="font-bold text-2xl md:text-5xl mb-10">{order.nome_remetente}</h1>
                        <p className="bg-white/5 md:text-xs p-5 rounded w-full">{order.descricao}</p>
                    </div>
                </div>
                <div className="bg-white/5 rounded h-full w-full my-10">
                    <OrderCard orderInfo={orderMap(order)} btnList={[
                        {text: 'Agendar entrega', onClick: () => setModalActive('scheduleDelivery')},
                        {text: 'Retirar no local', onClick: () => setModalActive('pickUpDelivery')}
                    ]}/>
                </div>
            </main>

            {modalActive === "scheduleDelivery" && (
                <ModalLayout
                    onClose={closeModal}
                    props={{
                        type: 'Entrega',
                        userAddress: user.endereco
                    }}
                />
            )}

            {modalActive === "pickUpDelivery" && (
                <ModalLayout
                    onClose={closeModal}
                    props={{
                        type: 'Retirada',
                        userAddress: null
                    }}
                />
            )}
        </div>
    )
}

export async function loader({ params }) {
    const authCheck = checkAuthLoader();
    if (authCheck) {
        return authCheck;
    }

    const token = getAuthToken();
    const userId = getUserId();
    const orderId = params.orderCode;

    const userResponse = fetch('http://localhost:5000/clientes/' + userId, {
        headers: { 'Authorization': 'Bearer ' + token },
    });

    const orderResponse = fetch('http://localhost:5000/encomendas/' + orderId, {
        headers: { 'Authorization': 'Bearer ' + token },
    });

    const [userRes, orderRes] = await Promise.all([userResponse, orderResponse]);

    if (!userRes.ok) {
        throw json({ message: 'Não foi possível carregar dados do usuário.' }, { status: 500 });
    }
    if (!orderRes.ok) {
        throw json({ message: 'Não foi possível carregar esta encomenda.' }, { status: orderRes.status });
    }

    const user = await userRes.json();
    const order = await orderRes.json();

    return { order, user };
}