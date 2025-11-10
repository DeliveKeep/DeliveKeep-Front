import OrderCard from "./OrderCard.jsx";

export default function LastOrders({ orders = [] }) {

    const orderMap = (orderData) => {
        const orderDetails = [
            {
                id: `${orderData.id}-code`,
                title: 'Código do Pedido',
                content: orderData.codigo_rastreamento
            },
            {
                id: `${orderData.id}-galpao`,
                title:'Ponto de entrega (ID)',
                content: orderData.id_galpao
            },
            {
                id: `${orderData.id}-status`,
                title: 'Status:',
                content: orderData.status_pedido
            },
            {
                id: `${orderData.id}-remetente`,
                title: 'Remetente:',
                content: orderData.nome_remetente
            }
        ];
        return orderDetails;
    }

    return (
        <div className="flex flex-col bg-white/5 container m-auto rounded-xl mb-10 py-10">
            {orders.length === 0 && (
                <p className="text-white text-center">Nenhuma encomenda encontrada.</p>
            )}
            {
                orders.map((order) => (
                    <OrderCard
                        key={order.id}
                        orderInfo={orderMap(order)}
                        btnList={[{to: `/order/${order.id}`, text: 'Ver Pedido'}]}
                    />
                ))
            }
        </div>
    )
};