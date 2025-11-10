import {
    Form,
    Link,
    useSearchParams,
    useActionData,
    useNavigation
} from "react-router-dom";
import LoginBgImage from "../../assets/images/login-bg.jpeg";
import DeliveKeep from "../DeliveKeep.jsx";

export default function AuthForm() {
    const [searchParams] = useSearchParams();

    const data = useActionData();
    const navigation = useNavigation();

    const isLogin = searchParams.get("mode") === "login";
    const isSubmitting = navigation.state === 'submitting';

    return (
        <div className="min-h-screen w-screen flex flex-col md:flex-row">

            <div className="w-full md:basis-1/3 px-10 py-20 bg-primary-blue container md:p-15 text-white flex flex-col justify-start">
                <DeliveKeep/>
                <div className="mt-30 md:mt-10">

                    <Form method="post" className="flex flex-col items-start justify-between font-xm gap-2">

                        {data && data.message && (
                            <p className="text-red-400">{data.message}</p>
                        )}
                        {data && data.errors && (
                            <ul>
                                {Object.values(data.errors).map((err) => (
                                    <li key={err}>{err}</li>
                                ))}
                            </ul>
                        )}
                        {data && data.message && <p>{data.message}</p>}

                        {!isLogin && (
                            <>
                                <label htmlFor="nome">Nome</label>
                                <input id="nome" name="nome" type="text" placeholder="Nome Completo" className="input-form" required/>

                                <label htmlFor='cpf'>CPF</label>
                                <input id='cpf' name="cpf" type='text' placeholder='123.456.789-00' className="input-form" required/>

                                <label htmlFor="endereco">Endereço</label>
                                <input id="endereco" name="endereco" type='text' placeholder='Av. exemplo' className="input-form" required/>

                                <label htmlFor="telefone">Telefone</label>
                                <input id="telefone" name="telefone" type='tel' placeholder='(55) 99999-9999' className="input-form" required/>
                            </>
                        )}

                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" placeholder="exemplo@email.com" className="input-form" required/>

                        <label htmlFor="senha">Senha</label>
                        <input id="senha" name="senha" type="password" placeholder="Senha" className="input-form" required/>

                        <button
                            type="submit"
                            className="btn-primary-long my-5"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Enviando...' : (isLogin ? 'Entrar' : 'Registrar')}
                        </button>

                        <Link to={`?mode=${isLogin ? 'signup' : 'login'}`} className="text-grey-light underline underline-offset-4 item-end">
                            {isLogin ? 'Sem conta? Cadastre-se' : 'Já tem cadastro? Acesse sua conta.'}
                        </Link>

                    </Form>
                </div>
            </div>

            <div className="hidden md:block md:basis-2/3 bg-cover bg-center" style={{backgroundImage: `url(${LoginBgImage})`}}>
                <div className="inset-0 w-full h-full bg-fade/80"></div>
            </div>
        </div>
    )
}