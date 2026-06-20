import { useAuth } from "@/context/Auth"
import { Navigate } from "react-router-dom"

const ProtectRoute = ({ Component }) => {
    const { isAuth, isAppLoading } = useAuth()

    if (isAppLoading) {
        return (
            <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h3>Loading...</h3>
            </div>
        )
    }

    if (!isAuth) return <Navigate to="/auth/login" />

    return <Component />

}

export default ProtectRoute