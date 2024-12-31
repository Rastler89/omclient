import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { PublicMenu } from "./PublicMenu";
import { AdminMenu } from "./AdminMenu";
import { PrivateMenu } from "./PrivateMenu";

export const Menu = () => {
    const { user,  isLoggedIn, logout} = useContext(AuthContext);

    if(!isLoggedIn) {
        return <PublicMenu />;
    }

    if(user?.role === 'admin') {
        return <AdminMenu logout={logout} />;
    }

    return <PrivateMenu logout={logout} />;
}