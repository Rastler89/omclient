import { useState } from "react";
import { omconstants } from "../utils/constants";
import { useGet } from "../utils/useFetch";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const {data} = useGet(omconstants.apiAuth+'/login');
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    )
}