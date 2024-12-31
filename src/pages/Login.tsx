import { useContext, useState } from "react";
import { omconstants } from "../utils/constants";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const sendLogin = async(email: any,password: any) => {
    try {
        const response = await fetch(`${omconstants.api}auth/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email,password})
        });
        if (!response.ok) {
            throw new Error("Error al iniciar sesión")
        }
        return await response.json();
    } catch(error) {
        throw error;
    }
}

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            const data = await sendLogin(email,password);
            login(data.token);
            navigate("/dashboard");
        } catch (err) {
            console.log(err);
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    )
}