
import { User, LogOut } from 'lucide-react';

interface TopNavbarProps {
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
  userName?: string;
}

export function TopNavbar({ isLoggedIn, onLogin, onLogout, userName = 'Utente' }: TopNavbarProps) {
  return (
    <nav className="bg-white px-6 py-4 flex items-center justify-between border-b border-gray-200">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <span className="font-semibold text-gray-900">RedRobin.ai</span>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-900 font-medium hover:text-orange-600">Home</a>
          <a href="#" className="text-gray-900 font-medium hover:text-orange-600">Servizi</a>
          <a href="#" className="text-gray-900 font-medium hover:text-orange-600">Contatti</a>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-4 py-2 text-gray-900 font-medium hover:text-orange-600">
          Italiano 🇮🇹
        </button>
        
        {!isLoggedIn ? (
          <>
            <button 
              onClick={onLogin}
              className="px-6 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-500"
            >
              Login
            </button>
            <button className="px-6 py-2 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600">
              Sign up
            </button>
          </>
        ) : (
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
              <User size={18} className="text-gray-700" />
              <span className="text-sm font-medium text-gray-900">{userName}</span>
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
    </nav>
  );
}
