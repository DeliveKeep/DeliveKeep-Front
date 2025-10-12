import {Container} from "react-bootstrap";

export default function (props) {
    return (
        <Container>
            <h1> Olá, {props.name}.</h1>
            <p>Aqui você encontra todas as informações relacionadas a sua conta, como acompanhar seus pedidos e adicionar novos endereços!</p>
        </Container>
    )
}