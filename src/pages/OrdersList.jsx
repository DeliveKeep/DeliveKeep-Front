import Header from "../components/Header.jsx";
import PageTitle from "../components/PageTitle.jsx";
import UserIcon from "../assets/icons/UserIcon.svg";
import LastOrders from "../components/Orders/LastOrders.jsx";
import OrderHeaderBgImage from "../assets/images/order-bg-img.jpeg";
import {checkAuthLoader, getAuthToken} from "../util/auth.js";
import {json, useLoaderData} from "react-router-dom";

export default function OrdersList() {
    const orders = useLoaderData();

    return (
        <div className="h-screen bg-primary-blue ">
            <div className="flex flex-col ">
                <Header props={{image: OrderHeaderBgImage}}/>
                <main className="w-full  container m-auto text-white md:">
                    <PageTitle props={{
                        icon: UserIcon,
                        text: "Lista de Pedidos"
                    }}/>

                    <LastOrders orders={orders}/>
                </main>
            </div>


        </div>
    )
}


export async function loader() {
    const authCheck = checkAuthLoader();
    if (authCheck) {
        return authCheck;
    }

    const token = getAuthToken();

    const ordersResponse = fetch('http://localhost:5000/encomendas/cliente', {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    });

    const [ordersRes] = await Promise.all([ordersResponse]);

    if (!ordersRes.ok) {
        throw json({ message: 'Não foi possível carregar encomendas.' }, { status: 500 });
    }
    const orders = await ordersRes.json();

    return { orders };
}