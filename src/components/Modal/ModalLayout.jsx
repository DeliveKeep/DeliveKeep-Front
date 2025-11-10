import Button from "../Button.jsx";

export default function ModalLayout({ props, onClose }) {
    const isDelivery = props.type === 'Entrega';

    function handleSubmit(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());
        console.log("Agendamento:", data);
        onClose();
    }

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-start bg-fade/60 h-full w-full overflow-y-auto">
            <div className="container flex flex-col items-center bg-primary-blue w-full md:w-1/2 lg:w-1/3 p-8 mt-40 rounded shadow-xl text-white">

                <h1 className='text-3xl font-bold mb-6'>Informações de {props.type}</h1>

                <form className="flex flex-col w-full" onSubmit={handleSubmit}>

                    <label htmlFor="date" className="font-bold mb-2">Data</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        className="text-fade bg-white rounded p-2"
                        min={new Date().toISOString().split("T")[0]}
                        required
                    />

                    <label htmlFor="turno" className="font-bold mb-2 mt-4">Turno:</label>
                    <select id="turno" name="turno" className="text-fade bg-white rounded p-2" required>
                        <option value="">Selecione um turno</option>
                        <option value="manha">Manhã (08:00 - 12:00)</option>
                        <option value="tarde">Tarde (13:00 - 18:00)</option>
                    </select>

                    {isDelivery && (
                        <>
                            <label htmlFor="endereco" className="font-bold mb-2 mt-4">Endereço</label>
                            <select
                                id="endereco"
                                name="endereco"
                                className="text-fade bg-white rounded p-2"
                                required
                                disabled={!props.userAddress}
                            >
                                {props.userAddress ? (
                                    <option value={props.userAddress}>
                                        {props.userAddress}
                                    </option>
                                ) : (
                                    <option value="">Nenhum endereço cadastrado</option>
                                )}
                            </select>
                        </>
                    )}

                    <input
                        type='submit'
                        value={`Salvar informações de ${props.type.toLowerCase()}`}
                        className="btn-primary-long mt-8 cursor-pointer"
                    />
                </form>

                <Button onClick={onClose} className="mt-4 bg-gray-500 hover:bg-gray-600">
                    Fechar
                </Button>
            </div>
        </div>
    );
}