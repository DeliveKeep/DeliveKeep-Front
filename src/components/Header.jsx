import HeaderTitle from "./HeaderTitle.jsx";

export default function Header({props}) {
    return (
        <header className="flex flex-col">
            <div className="w-full h-fit bg-cover bg-center" style={{backgroundImage: `url(${props.image})`}}>
                <div className="inset-0 w-full h-full pl-10  py-3 bg-fade/70">
                    <HeaderTitle/>
                </div>
            </div>


        </header>
    )
}