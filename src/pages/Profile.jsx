import { useLoaderData, json } from 'react-router-dom';
import Header from "../components/Header.jsx";
import ProfileBGImage from "../assets/images/managerAccount-card-img.jpeg";
import PageTitle from "../components/PageTitle.jsx";
import UserIcon from "../assets/icons/UserIcon.svg";
import { getAuthToken, getUserId, checkAuthLoader } from '../util/auth.js';

export default function Profile() {
    const user = useLoaderData();

    return (
        <div className="flex flex-col bg-primary-blue min-h-screen h-fit">
            <Header props={{image: ProfileBGImage}}/>
            <main className="w-full h-full container m-auto text-white">
                <PageTitle props={{
                    icon: UserIcon,
                    text : "Dados da Conta"
                }}/>

                <section className="flex flex-col md:flex-row m-10 md:m-auto justify-around ">
                    <div className="w-full items-start mb-20 md:mb-0">

                        <div className="p-1">
                            <p className="font-bold">Nome:</p>
                            <p className="border-1 border-white rounded p-1 mt-1 pl-4 text-grey w-1/2">{user.nome}</p>
                        </div>

                        <div className="p-1">
                            <p className="font-bold">Email:</p>
                            <p className="border-1 border-white rounded p-1 mt-1 pl-4 text-grey w-1/2">{user.email}</p>
                        </div>

                        <div className="p-1">
                            <p className="font-bold">CPF:</p>
                            <p className="border-1 border-white rounded p-1 mt-1 pl-4 text-grey w-1/2">{user.cpf}</p>
                        </div>

                        <div className="p-1">
                            <p className="font-bold">Telefone:</p>
                            <p className="border-1 border-white rounded p-1 mt-1 pl-4 text-grey w-1/2">{user.telefone}</p>
                        </div>

                        <div className="p-1">
                            <p className="font-bold">Endereço:</p>
                            <p className="border-1 border-white rounded p-1 mt-1 pl-4 text-grey w-1/2">{user.endereco}</p>
                        </div>

                        <div className="p-1">
                            <p className="font-bold">Senha:</p>
                            <p className="border-1 border-white rounded p-1 mt-1 pl-4 text-grey w-1/2">********</p>
                        </div>
                    </div>

                    <div>
                        <p className="font-bold">
                            Receber mensagens por E-mail?
                        </p>
                        <p>
                            Você receberá mensagens por e-mail sempre que houver atualizações sobre suas encomendas.
                        </p>
                    </div>
                </section>
            </main>
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

    const response = await fetch('http://localhost:5000/clientes/' + userId, {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    });

    if (!response.ok) {
        throw json(
            { message: 'Não foi possível carregar os dados do perfil.' },
            { status: 500 }
        );
    }

    return response.json();
}