import {Outlet} from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage.jsx";

const isAuthorized = () => {
    return JSON.parse(localStorage.getItem('authorized'))
}

const ProtectedRoute = () => {
    const isAllowed = isAuthorized()


    return isAllowed ? <Outlet /> : <NotFoundPage />
}

export default ProtectedRoute