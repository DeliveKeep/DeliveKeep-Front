import {Link} from "react-router-dom";
import {getAuthToken} from "../util/auth.js";

export default function HeaderTitle() {
    const token = getAuthToken();
    const isLogged = token && token !== 'EXPIRED';

    const destination = isLogged ? '/dashboard' : '/auth';

    return (
        <Link to={destination} className="text-xl md:text-4xl font-bold text-white font-roboto">
            Delive<br/>Keep
        </Link>
    )
}