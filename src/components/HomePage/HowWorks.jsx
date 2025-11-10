import StoreIcon from '../../assets/icons/StoreIcon.svg';
import CursorIcon from '../../assets/icons/CursorIcon.svg';
import ClockIcon from '../../assets/icons/ClockIcon.svg';

export default function HowWorks() {
    return (
        <div className="flex flex-col bg-primary-blue text-white " >
            <div className="w-full h-fit flex flex-col flex-grow container mx-auto px-4 md:h-screen sm:px-6 lg:px-8">
                <header>
                    <h1 className="font-bold text-5xl/14 mt-9 md:line-clamp-2">
                        Com a <span className="text-primary-yellow"> Delive Keep</span>, receber suas encomendas é
                        simples assim:
                    </h1>
                </header>
                <main className="mt-20">
                    <ul className="list-none flex flex-col md:flex-row justify-between items-center gap-y-8 md:gap-x-0 md:mx-0 md:gap-y-0">
                        <li className="flex flex-col items-center w-48 text-center">
                            <h3 className="font-bold text-lg mb-4">Compre online</h3>
                            <div className="p-5 border-2 md:border-4 border-white rounded-full md:p-16">
                                <img src={StoreIcon} alt="A Store Icon" className="w-20"/>
                            </div>
                        </li>
                        <li className="hidden md:block">
                            <svg className="w-full h-6 text-white" viewBox="0 0 100 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 10H90 L80 5 M90 10 L80 15" stroke="currentColor" strokeWidth="3"/>
                            </svg>
                        </li>
                        <li className="block md:hidden">
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                            </svg>
                        </li>

                        <li className="flex flex-col items-center w-48 text-center">
                            <h3 className="font-bold text-lg mb-4">Escolha a Delive Keep</h3>
                            <div className="p-5 border-2 md:border-4 border-white rounded-full md:p-16">
                                <img src={CursorIcon} alt="A Mouse Cursor Icon" className="w-12 h-12"/>
                            </div>
                        </li>
                        <li className="hidden md:block">
                            <svg className="w-full h-6 text-white" viewBox="0 0 100 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 10H90 L80 5 M90 10 L80 15" stroke="currentColor" strokeWidth="3"/>
                            </svg>
                        </li>
                        <li className="block md:hidden">
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                            </svg>
                        </li>

                        <li className="flex flex-col items-center w-48 text-center">
                            <h3 className="font-bold text-lg mb-4">Retire no seu tempo</h3>
                            <div className="p-5 border-2 md:border-4 border-white rounded-full md:p-16">
                                <img src={ClockIcon} alt="A Clock Icon" className="w-12 h-12"/>
                            </div>
                        </li>
                    </ul>
                </main>
            </div>
        </div>
    )
}