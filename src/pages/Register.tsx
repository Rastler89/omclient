import axios from "axios";
import { useState } from "react";

export default function Register() {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
          await axios.post('http://tu-backend-nest/auth/register', { email, password }); // Ajusta la URL
          // Mostrar mensaje de éxito o redirigir al login
          alert("Usuario registrado con exito")
          window.location.href = "/login";
        } catch (error) {
          console.error('Error en el registro:', error);
          // Manejar el error
        }
      };
    
      return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Register</button>
        </form>
      );
}