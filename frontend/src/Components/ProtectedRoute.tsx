import { Navigate } from "react-router"

export default function ProtectedRoute({ children}:any) {
    const user = localStorage.getItem('token')
    if (!user) {
        return <Navigate to={'/'} />
    }
    return children
}
