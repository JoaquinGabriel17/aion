import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if(!username || !password) return alert("Por favor complete todos los campos");
      const { data } = await axios.post(`${backendURL}/users/login`, {
        name: username,
        password,
      });
      sessionStorage.setItem("userData", JSON.stringify(data));
      login(data);
      navigate("/");
      return;
    } catch (error) {
      alert("Error al iniciar sesión. Por favor, verifique sus credenciales.");
      console.error("Login error:", error);
      return;
    }
    

    
  };

  return (
    <div className=" flex items-center justify-center bg-[#F7F9FC] px-4">
      <div className="w-full max-w-md bg-[#000000] p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Iniciar sesión</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-1">Nombre de usuario</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Contraseña</label>
            <input
              type="password"
              className="w-full p-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded"
          >
            Ingresar
          </button>
        </form>

        {/*<p className="text-center text-gray-400 mt-4">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-400 hover:underline cursor-pointer"
          >
            Register
          </span>
        </p>*/}
      </div>
    </div>
  );
}
