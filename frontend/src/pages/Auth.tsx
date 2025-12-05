import Login from "../components/Login"
import Register from "../components/Register"
import { useState } from "react";

const Auth: React.FC = () => {

    const [isLogin, setIsLogin] = useState(true);

    const hanldeChange = () => {
        setIsLogin(!isLogin);
    }

    return(
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#F7F9FC] px-4">
            <div  className="m-6 flex justify-center gap-4 mb-4">
                <button 
                    onClick={() => setIsLogin(true)}
                    className="w-30 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded"
                >Iniciar sesión</button>
                <button 
                    onClick={() => setIsLogin(false)}
                    className="w-30 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded"
                >Registrarse</button>
            </div>
            {isLogin ?
                <Login />
                :
                <Register onChange={hanldeChange} />    
            }
        </div>
    )
}

export default Auth;