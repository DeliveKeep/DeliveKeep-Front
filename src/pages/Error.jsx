import {useRouteError} from 'react-router-dom';
import HomeBgImage from "../assets/images/home-bg-image.jpg";
import DeliveKeep from "../components/DeliveKeep.jsx";
import Button from "../components/Button.jsx";

function ErrorPage() {
    const error = useRouteError();

    let title = 'An error occurred!';
    let message = 'Something went wrong!';

    if (error.status === 500) {
        message = error.data.message;
    }

    if (error.status === 404) {
        title = 'Not found!';
        message = 'Could not find resource or page.';
    }

    return (
        <>

            <div className="flex flex-col">
                <div className="relative w-full h-screen flex flex-col bg-primary-blue text-white">
                    <div className="relative z-10 flex flex-col flex-grow w-full mx-auto px-4 sm:px-6 lg:px-8">
                        <header className="py-8 bg-primary-blue">
                            <DeliveKeep/>
                        </header>
                        <main className="flex-grow flex flex-col justify-center items-center m-10 bg-fade/20">
                            <h1 className="text-5xl md:text-7xl font-bold mb-4">
                               Error  {error.status}
                            </h1>
                            <h2 className="text-5xl md:text-7xl font-bold mb-4">
                                {title}
                            </h2>
                            <p>{message}</p>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ErrorPage;