import CalenderIcon from '../../assets/icons/CalendarIcon.svg';
import LockIcon from '../../assets/icons/LockIcon.svg';
import GraphIcon from '../../assets/icons/GraphIcon.svg';

export default function About(){
    return (
        <div className="flex flex-col bg-primary-blue text-white">
            <div className="w-full h-fit flex flex-col flex-grow container mx-auto px-4 md:h-screen sm:px-6 lg:px-8">
                <header>
                    <h1 className="font-bold text-5xl/14 mt-9 ">
                        Mais que entregas:<br/>
                        <span className="text-primary-yellow">comodidade</span> e <span className="text-primary-yellow">flexibilidade</span>
                        <br/> para o seu dia a dia.
                    </h1>
                </header>
                <main>
                    <p className="font-semibold my-10">
                        A Delive Keep nasceu para transformar a maneira como você recebe suas compras online.Sabemos que muitas pessoas não conseguem estar em casa no momento da entrega, e isso limita o acesso ao comércio eletrônico.
                        <br/><br/>
                        Nossa plataforma oferece uma solução simples e segura: você compra online e retira sua encomenda em pontos parceiros próximos a você, no horário que preferir. Mais comodidade, mais flexibilidade e muito mais confiança.
                    </p>
                    <ul className="list-none flex flex-row flex-grow pt-8">
                        <li className="flex flex-col items-center p-5">
                            <img src={CalenderIcon} alt="A Calender Icon"/>
                           <h3 className="font-bold">Comodidade</h3>
                           <p>Você decide onde e quando retirar seu pedido, sem complicações.</p>
                        </li>
                        <li className="flex flex-col items-center p-5">
                            <img src={LockIcon} alt="A Calender Icon"/>
                           <h3 className="font-bold">Segurança</h3>
                           <p>Locais de retirada confiáveis, garantindo proteção para suas encomendas.</p>
                        </li>
                        <li className="flex flex-col items-center p-5">
                            <img src={GraphIcon} alt="A Calender Icon"/>
                           <h3 className="font-bold">Flexibilidade</h3>
                           <p>Escolha entre diversos pontos parceiros próximos de casa ou do trabalho.</p>
                        </li>
                    </ul>
                </main>
            </div>
        </div>
    )
}