import HomeBgImage from '../../assets/images/home-bg-image.jpg'
import DeliveKeep from "../DeliveKeep.jsx";
import Button from "../Button.jsx";

export default function Hero() {
    return (
        <div className="flex flex-col">
            <div className="relative w-full h-screen flex flex-col bg-primary-blue text-white">
                <div className="absolute inset-0">
                    <div className="w-full h-screen bg-cover bg-center"
                         style={{backgroundImage: `url(${HomeBgImage})`}}>
                        <div className="absolute inset-0 w-full h-full bg-fade/70"></div>
                    </div>
                </div>
                <div className="relative z-10 flex flex-col flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
                    <header className="py-8">
                        <DeliveKeep/>
                    </header>
                    <main className="flex-grow flex flex-col justify-center items-end-safe">
                        <div>
                            <h1 className="text-5xl md:text-7xl font-bold mb-4">
                                Sua encomenda,<br/> no seu tempo.
                            </h1>
                            <p className="text-lg md:text-xl max-w-lg">
                                Compre online e retire seus produtos de forma prática, segura e no horário que você
                                escolher.
                            </p>
                        </div>

                    </main>
                    <section className="pb-16">
                        <div
                            className="grid grid-cols-1 md:grid-cols-2 md:gap-8 bg-primary-blue/80 rounded-lg shadow-lg">

                            {/* Card 1: Login */}
                            <div className="p-6 mx-4 md:my-5 md:mx-0">
                                <h3 className="text-lg font-semibold mb-2">Entre na sua conta Delive Keep</h3>
                                <p className="text-sm text-gray-300 mb-8">Acompanhe suas encomendas e a disponibilidade
                                    de retirada.</p>
                                <Button to="/auth?mode=login">
                                    Entrar
                                </Button>
                            </div>

                            {/* Card 2: Registro */}
                            <div
                                className="p-6 mx-4 md:my-5 md:mx-0 border-t-1 md:border-t-0 md:border-l-1 border-white">
                                <h3 className="text-lg font-semibold mb-2">Ainda não tem conta?</h3>
                                <p className="text-sm text-gray-300 mb-8">Crie seu cadastro e comece a aproveitar nossos
                                    serviços.</p>
                                <Button to="/auth?mode=singup">
                                    Registrar
                                </Button>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
};