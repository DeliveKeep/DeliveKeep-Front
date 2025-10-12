import SubCard from "./SubCard.jsx";

export default function HomeSubMenu() {
    const textSubMenu = [
        { title: "Entre na sua conta Delive Keep",
        description: "Acompanhe suas encomendas e gerencie seus pontos de retirada.",
        buttonLabel: "Entrar",
        onclick: () => {}},

        { title: "Ainda não tem conta?",
        description: "Crie seu cadastro e comece a aproveitar nossos serviços.",
        buttonLabel: "Registrar",
        onclick: () => {}}
    ]


    return (
        <div>
            <SubCard title={textSubMenu[0].title}
                     description={textSubMenu[0].description}
                     buttonLabel={textSubMenu[0].buttonLabel}
                     onClick={textSubMenu[0].onclick}
            />
            <SubCard title={textSubMenu[1].title}
                     description={textSubMenu[1].description}
                     buttonLabel={textSubMenu[1].buttonLabel}
                     onClick={textSubMenu[1].onclick}
            />

        </div>
            )
}