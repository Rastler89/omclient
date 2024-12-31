import { Link } from "react-router-dom"

export const AdminMenu = ({logout}) => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/admin">Admin</Link></li>
                <li><button onClick={logout}>Logout</button></li>
            </ul>
        </nav>
    )
}