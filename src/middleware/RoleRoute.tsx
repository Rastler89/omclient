import { Navigate } from "react-router-dom"
import { hasRole, isAuthenticated } from "../utils/authHelper"

export const RoleRoute = ({children, requiredRole}) => {
    if(!isAuthenticated()) {
        return <Navigate to="/login" />;
    }

    if(!hasRole(requiredRole)) {
        return <Navigate to="/unauthorized" />
    }

    return children;
}