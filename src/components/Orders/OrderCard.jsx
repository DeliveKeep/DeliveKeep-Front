import Button from "../Button.jsx";

export default function OrderCard({orderInfo, btnList}) {
    return (
        <div className="flex flex-col text-white bg-primary-blue max-w-full my-5 mx-5 rounded-md m-auto">
            <div className="container mt-8 mb-10 w-full px-10">
                <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {
                        orderInfo.map((info) => (
                            <li  className="flex flex-col my-2 md:my-0 md:mb-4 md:mx-5" key={info.id}>
                                <p className='font-bold'>{info.title}</p>
                                <p className="text-grey-light">{info.content}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <ul className="bg-white/3 max-w-full flex flex-row px-8 py-2">
                {
                    btnList.map((btn) => (
                        <Button key={btn.to} to={btn.to} onClick={btn.onClick} className="mx-5">
                            {btn.text}
                        </Button>
                    ))
                }
                <li>
                    <button className="btn-primary ml-5">
                        Contatar Suporte
                    </button>
                </li>
            </ul>
        </div>
    )
};