import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Navbar: React.FC = () => {

    const navigate = useNavigate();
    const { user, logout } = useAuth();


    return (
        <nav className="h-20 top-0 fixed w-full bg-black shadow-md p-4 flex justify-between items-center">
            <div 
                onClick={() => navigate('/')}
                className="text-2xl font-bold text-[#FF6D6D] cursor-pointer"
            >
                Aion
            </div>

            {user ? (
                <button
                    onClick={() => {
                        logout();
                        navigate('/auth');
                    }}
                    className="bg-red-600 text-white px-4 py-2 rounded-2xl font-semibold"
                >
                    Cerrar sesión
                </button>
            ) : (
                <button 
                    onClick={() => navigate('/auth')}
                    className="bg-blue-600 text-white px-4 py-2 rounded-2xl font-semibold"
                >
                    Iniciar Sesión
                </button>
            )}
        </nav>
    );
};

export default Navbar;
