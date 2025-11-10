import {Link} from "react-router-dom";
import { getAuthToken } from "../util/auth";

export default function DeliveKeep() {
    const token = getAuthToken();
    const isLogged = token && token !== 'EXPIRED';

    const destination = isLogged ? '/dashboard' : '/auth';

    return (
        <Link to={destination} className="text-4xl md:text-6xl font-bold text-white font-roboto">
            Delive<br/>Keep
        </Link>
    )
}