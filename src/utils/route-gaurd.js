import { useLocation, Navigate } from "react-router-dom";
import routes from "../constants/routes";
import { getCookie } from '../utils/cookie-service';

export function PrivateRoute({ children }) {
    const auth = getCookie('sessionToken');
    const location = useLocation();

    if (!auth) {
        return <Navigate to={routes.login} state={{ from: location }} />;
    }

    return children;
}