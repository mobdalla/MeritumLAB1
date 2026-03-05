import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { User, LogOut } from "lucide-react";

interface TopNavbarProps {
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
  userName?: string;
}
export default function Header({
  isLoggedIn,
  onLogin,
  onLogout,
  userName = "Utente",
}: TopNavbarProps) {
  const navigate = useNavigate();
  return (
    <header className="bg-white py-4 px-6 flex items-center justify-between">
      {/* Logo

          src="/images/Font 1.png width='60' height='50' viewBox='0 0 60 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 5L25 25L15 45L5 25L15 5Z' fill='%23FF6B35'/%3E%3Cpath d='M30 15L40 35L30 45L20 35L30 15Z' fill='%23F7931E'/%3E%3Ctext x='5' y='48' font-family='Arial' font-size='8' fill='%23333'%3EMeritumLab%3C/text%3E%3C/svg%3E"
      */}
      <div className="flex items-center">
        <img src="/images/Fo.png" alt="MeritumLab" className="h-12" />
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-12">
        <a
          href="#home"
          className="text-black hover:text-gray-600 transition-colors"
        >
          Home
        </a>
        <a
          href="#servizi"
          className="text-black hover:text-gray-600 transition-colors"
        >
          Servizi
        </a>
        <a
          href="#contatti"
          className="text-black hover:text-gray-600 transition-colors"
        >
          Contatti
        </a>
      </nav>

      {/* Right side - Language & Auth */}

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-4 py-2 text-gray-900 font-medium hover:text-orange-600">
          Italiano 🇮🇹
        </button>
        {!isLoggedIn ? (
          <>
            <button
              onClick={() => navigate("/Login")}
              className="px-6 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-500"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="px-6 py-2 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600"
            >
              Sign up
            </button>
          </>
        ) : (
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
              <User size={18} className="text-gray-700" />
              <span className="text-sm font-medium text-gray-900">
                {userName}
              </span>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
            >
              <LogOut size={18} />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
