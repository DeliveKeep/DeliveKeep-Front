import React from 'react';

// Props:
// - orderId: O código do pedido (ex: "123456789")
// - address: O endereço de entrega/retirada
// - date: A data de entrega/retirada
// - status: O status atual do pedido

const OrderCard = ({ orderId, address, date, status }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100">
                <div className="card-body d-flex flex-column">
                    [cite_start]<h5 className="card-title">Código do pedido [cite: 9, 15, 22]</h5>
                    [cite_start]<p className="card-text text-muted">{orderId} [cite: 9, 16, 23]</p>

                    [cite_start]<h6 className="card-subtitle mb-2 text-muted">Ponto de entrega/retirada [cite: 10, 17, 24]</h6>
                    [cite_start]<p className="card-text">{address} [cite: 10, 17, 24]</p>

                    [cite_start]<h6 className="card-subtitle mb-2 text-muted">Data de entrega/retirada [cite: 11, 18, 25]</h6>
                    [cite_start]<p className="card-text">{date} [cite: 11, 18, 25]</p>

                    <p className="card-text">
                        [cite_start]<strong>Status: [cite: 12, 19, 26][cite_start]</strong> <span className="text-success">{status} [cite: 13, 20, 27]</span>
                    </p>

                    <div className="mt-auto d-flex justify-content-between">
                        [cite_start]<button className="btn btn-primary">Ver pedido [cite: 14, 21, 28]</button>
                        [cite_start]<button className="btn btn-outline-secondary">Contatar suporte [cite: 14, 21, 28]</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;