import { Link } from "react-router-dom"

export const PrivateMenu = ({logout}) => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><button onClick={logout}>Logout</button></li>
            </ul>
        </nav>
    )
}