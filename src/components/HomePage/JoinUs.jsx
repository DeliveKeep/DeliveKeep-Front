import {Link} from "react-router-dom";
import Button from "../Button.jsx";

export default function JoinUs() {
    return (
        <div className="flex flex-col bg-primary-blue text-white">
            <div className="relative w-full md:h-screen flex flex-col flex-grow container mx-auto px-4 mb-3 sm:px-6 lg:px-8">
                <header className="md:py-5">
                    <h1 className="text-4xl/15 font-bold md:text-8xl/25 mt-9 ">
                        Pronto para <span className="text-primary-yellow"> simplificar </span> a forma de receber suas
                        encomendas?
                    </h1>
                </header>
                <main className="grid grid-cols-2 grid-rows-1 gap-6 lg:gap-8 mb-15">
                    <div>
                        <p className="font-semibold my-10">
                            Não perca tempo com entregas complicadas. Junte-se à Delive Keep e receba suas compras
                            no <span className="text-primary-yellow">seu tempo</span> e do seu <span
                            className="text-primary-yellow">jeito</span>.</p>
                        <Button to="/auth?mode=singup">
                            Junte-se
                        </Button>
                    </div>

                </main>
            </div>
        </div>

)
}
