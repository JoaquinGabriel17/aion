import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {

    const navigate = useNavigate();

    return(
        <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-[#1A1A1A]">Aion</div>
            <div>
                <button 
                onClick={() => navigate('/auth')}
                className="bg-[#4A6CF7] text-white px-4 py-2 rounded-2xl font-semibold">Iniciar Sesión</button>
            </div>
        </nav>
    )
}

export default Navbar;