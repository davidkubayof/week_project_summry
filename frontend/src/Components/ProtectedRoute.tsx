import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute() {
    const isAuth = !!localStorage.getItem("token");
    return isAuth ? <Outlet /> : <Navigate to="/" />;
    }
